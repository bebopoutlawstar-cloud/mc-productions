/* MC Productions — renders the content from content.js onto each page */

// Pull the video ID out of any YouTube link format
function youtubeId(url) {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/|live\/)([\w-]{11})/);
  return match ? match[1] : null;
}

// Pull the file ID out of a Google Drive share link
function driveId(url) {
  if (!url) return null;
  const match = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
  return match ? match[1] : null;
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

// A video card: shows the thumbnail, swaps in the player when clicked
function videoCard(item, index) {
  const card = el("article", "card video-card");
  const frame = el("div", "frame");
  const ytId = youtubeId(item.url);
  const gdId = driveId(item.url);
  const id = ytId || gdId;
  const thumb = ytId
    ? "https://i.ytimg.com/vi/" + ytId + "/hqdefault.jpg"
    : "https://drive.google.com/thumbnail?id=" + gdId + "&sz=w640";
  const playerUrl = ytId
    ? "https://www.youtube-nocookie.com/embed/" + ytId + "?autoplay=1"
    : "https://drive.google.com/file/d/" + gdId + "/preview";

  if (id) {
    const button = el("button", "play");
    button.setAttribute("aria-label", "Play " + item.title);
    button.style.backgroundImage = "url(" + thumb + ")";
    button.appendChild(el("span", "play-icon", "▶"));
    button.addEventListener("click", function () {
      const player = document.createElement("iframe");
      player.src = playerUrl;
      player.title = item.title;
      player.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
      player.allowFullscreen = true;
      frame.replaceChildren(player);
    });
    frame.appendChild(button);
  } else {
    frame.classList.add("empty");
    frame.appendChild(el("span", "soon", "COMING SOON"));
  }

  card.appendChild(frame);
  const info = el("div", "info");
  info.appendChild(el("span", "num", String(index + 1).padStart(2, "0")));
  info.appendChild(el("h3", "", item.title));
  if (item.note) info.appendChild(el("p", "note", item.note));
  card.appendChild(info);
  return card;
}

function upcomingCard(item) {
  const card = el("article", "card text-card");
  card.appendChild(el("span", "tag", item.status));
  card.appendChild(el("h3", "", item.title));
  card.appendChild(el("p", "", item.blurb));
  return card;
}

function artCard(item) {
  const card = el("article", "card art-card");
  const frame = el("div", "frame");
  if (item.img) {
    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.title;
    img.loading = "lazy";
    img.style.cursor = "zoom-in";
    img.addEventListener("click", function () { openLightbox(img); });
    frame.appendChild(img);
  } else {
    frame.classList.add("empty");
    frame.appendChild(el("span", "soon", "NO DATA"));
  }
  card.appendChild(frame);
  const info = el("div", "info");
  info.appendChild(el("h3", "", item.title));
  if (item.note) info.appendChild(el("p", "note", item.note));
  card.appendChild(info);
  return card;
}

function codeCard(item) {
  const card = el("article", "card text-card code-card");
  card.appendChild(el("h3", "", item.title));
  card.appendChild(el("p", "", item.blurb));
  const tech = el("ul", "tech");
  (item.tech || []).forEach(function (t) { tech.appendChild(el("li", "", t)); });
  card.appendChild(tech);
  const links = el("div", "links");
  if (item.live) { const a = el("a", "btn", "Launch"); a.href = item.live; a.target = "_blank"; a.rel = "noopener"; links.appendChild(a); }
  if (item.repo) { const a = el("a", "btn ghost", "Source"); a.href = item.repo; a.target = "_blank"; a.rel = "noopener"; links.appendChild(a); }
  card.appendChild(links);
  return card;
}

// Full-screen photo viewer: tap a photo, use arrows / swipe / Esc
let lbImages = [];
let lbIndex = 0;
function showLightbox() {
  const box = document.getElementById("lightbox");
  const current = lbImages[lbIndex];
  box.querySelector("img").src = current.src;
  box.querySelector("img").alt = current.alt;
  box.querySelector(".lb-cap").textContent = current.alt;
}
function stepLightbox(step) {
  lbIndex = (lbIndex + step + lbImages.length) % lbImages.length;
  showLightbox();
}
function closeLightbox() { document.getElementById("lightbox").classList.remove("open"); }
function openLightbox(img) {
  let box = document.getElementById("lightbox");
  if (!box) {
    box = el("div", "lightbox");
    box.id = "lightbox";
    box.appendChild(document.createElement("img"));
    box.appendChild(el("p", "lb-cap"));
    const close = el("button", "lb-close", "×"); close.setAttribute("aria-label", "Close");
    const prev = el("button", "lb-prev", "‹"); prev.setAttribute("aria-label", "Previous photo");
    const next = el("button", "lb-next", "›"); next.setAttribute("aria-label", "Next photo");
    box.append(close, prev, next);
    document.body.appendChild(box);
    prev.addEventListener("click", function (e) { e.stopPropagation(); stepLightbox(-1); });
    next.addEventListener("click", function (e) { e.stopPropagation(); stepLightbox(1); });
    box.addEventListener("click", closeLightbox);
    document.addEventListener("keydown", function (e) {
      if (!box.classList.contains("open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") stepLightbox(-1);
      if (e.key === "ArrowRight") stepLightbox(1);
    });
    let startX = 0;
    box.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; });
    box.addEventListener("touchend", function (e) {
      const moved = e.changedTouches[0].clientX - startX;
      if (Math.abs(moved) > 50) { e.preventDefault(); stepLightbox(moved < 0 ? 1 : -1); }
    });
  }
  lbImages = Array.from(img.closest(".grid").querySelectorAll("img"));
  lbIndex = lbImages.indexOf(img);
  showLightbox();
  box.classList.add("open");
}

// Fill a container (by id) with cards
function fill(id, items, makeCard) {
  const box = document.getElementById(id);
  if (!box || !items) return;
  items.forEach(function (item, i) { box.appendChild(makeCard(item, i)); });
}

function setText(id, text) {
  const node = document.getElementById(id);
  if (node && text) node.textContent = text;
}

// "Hire Us" form: sends the message without leaving the page
function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  const status = document.getElementById("contact-status");
  const button = form.querySelector("button");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    if (data._honey) return;                       // a bot filled the hidden box
    if (!data.name.trim() || !data.message.trim() || !/^\S+@\S+\.\S+$/.test(data.email)) {
      status.textContent = "Please add your name, a valid email and a message.";
      status.className = "form-status error";
      return;
    }
    data._subject = "MC Productions enquiry: " + data.service;
    data._template = "table";
    button.disabled = true;
    status.textContent = "Sending...";
    status.className = "form-status";

    fetch("https://formsubmit.co/ajax/" + window.MC.contactTo, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    })
      .then(function (response) { return response.json(); })
      .then(function (result) {
        if (String(result.success) !== "true") throw new Error(result.message);
        form.reset();
        status.textContent = "Thanks! Your message is on its way. We'll be in touch soon.";
        status.className = "form-status ok";
      })
      .catch(function () {
        status.textContent = "Something went wrong sending that. Please try again in a minute.";
        status.className = "form-status error";
      })
      .finally(function () { button.disabled = false; });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  setupContactForm();
  const MC = window.MC;
  fill("trailers", MC.trailers, videoCard);
  fill("weddings", MC.weddings, artCard);
  fill("upcoming", MC.upcoming, upcomingCard);
  fill("malcolm-films", MC.malcolm.films, videoCard);
  fill("malcolm-art", MC.malcolm.art, artCard);
  fill("malcolm-games", MC.malcolm.games, artCard);
  fill("cole-edits", MC.cole.edits, videoCard);
  fill("cole-code", MC.cole.code, codeCard);
  setText("malcolm-bio", MC.malcolm.bio);
  setText("cole-bio", MC.cole.bio);
  setText("mission", MC.mission);

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
