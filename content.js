/* ============================================================
   MC PRODUCTIONS — ALL SITE CONTENT LIVES IN THIS ONE FILE
   ------------------------------------------------------------
   To add a video: paste the YouTube link between the quotes
   after  url:  — any YouTube link works, and so does a
   Google Drive video link (shared as "Anyone with the link").
   Leave url: "" and the card shows as "COMING SOON".
   To add another item, copy a { ... }, line and edit it.
   ============================================================ */

window.MC = {

  /* ---------- HOME PAGE ---------- */
  mission: "With over five years of experience creating trailers, films, video game trailers, music videos, and documentaries, MC Productions is here to create a new approach in these art forms.",

  trailers: [
    { title: "FallOut London Teaser", url: "https://youtu.be/VWYAU3HW_y0", note: "Teaser" },
    { title: "Trailer Two",   url: "", note: "Teaser" },
    { title: "Trailer Three", url: "", note: "Behind the scenes" },
  ],

  upcoming: [
    { title: "Untitled Project A", status: "IN PRODUCTION", blurb: "Short description of the project goes here." },
    { title: "Untitled Project B", status: "WRITING",       blurb: "Short description of the project goes here." },
    { title: "Untitled Project C", status: "PLANNED",       blurb: "Short description of the project goes here." },
  ],

  /* ---------- MALCOLM'S PAGE ---------- */
  malcolm: {
    bio: "Director and photographer. One half of MC Productions.",
    films: [
      { title: "Film One", url: "", note: "Short film" },
      { title: "Film Two", url: "", note: "Short film" },
      { title: "Film Three", url: "", note: "Edit" },
    ],
    /* Photos: put image files in the "images" folder and set
       img: "images/filename.jpg" */
    art: [
      { title: "Under the Tunnel", img: "images/tunnel.jpg",   note: "Black and white" },
      { title: "Portrait",         img: "images/portrait.jpg", note: "Studio portrait" },
      { title: "The Photographer", img: "images/camera.jpg",   note: "Studio portrait" },
      { title: "Pilings",          img: "images/pilings.jpg",  note: "Black and white" },
      { title: "Trail",            img: "images/trail.jpg",    note: "Landscape" },
    ],
  },

  /* ---------- COLE'S PAGE ---------- */
  cole: {
    bio: "Video editor and programmer. One half of MC Productions.",
    edits: [
      { title: "Editing Reel", url: "https://www.youtube.com/watch?v=4NnF5rzxVTw", note: "Editing reel" },
      { title: "Capture Reel 2024", url: "https://drive.google.com/file/d/1rxkeFzeGHFG87lgmlJAzIND_Eb88jbyi/view", note: "Capture reel" },
      { title: "Edit Three", url: "", note: "Video edit" },
    ],
    code: [
      {
        title: "NightLine",
        blurb: "A Persona-inspired messaging web app: rooms, DMs, voice and video messages, stickers, polls, themes and push notifications.",
        tech: ["JavaScript", "Supabase", "GitHub Pages"],
        live: "https://bebopoutlawstar-cloud.github.io/nightline/",
        repo: "https://github.com/bebopoutlawstar-cloud/nightline",
      },
      {
        title: "Habit Tracker",
        blurb: "A React habit and wellness tracker with streaks, stats and saved progress.",
        tech: ["React", "Vite", "localStorage"],
        live: "https://bebopoutlawstar-cloud.github.io/habit-tracker",
        repo: "https://github.com/bebopoutlawstar-cloud/habit-tracker",
      },
    ],
  },
};
