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
    const link = document.createElement("a");   // click to open full size
    link.href = item.img;
    link.target = "_blank";
    link.appendChild(img);
    frame.appendChild(link);
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

document.addEventListener("DOMContentLoaded", function () {
  const MC = window.MC;
  fill("trailers", MC.trailers, videoCard);
  fill("upcoming", MC.upcoming, upcomingCard);
  fill("malcolm-films", MC.malcolm.films, videoCard);
  fill("malcolm-art", MC.malcolm.art, artCard);
  fill("cole-edits", MC.cole.edits, videoCard);
  fill("cole-code", MC.cole.code, codeCard);
  setText("malcolm-bio", MC.malcolm.bio);
  setText("cole-bio", MC.cole.bio);
  setText("mission", MC.mission);

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
