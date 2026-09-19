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

  /* ---------- CONTACT FORM ----------
     The "Hire Us" form is delivered by web3forms.com.
     Paste the access key they email you between the quotes.
     (The key is safe to have in this file - it only lets people
     send messages TO you, and it keeps your email address hidden.) */
  contactKey: "ab23b3f6-0e0f-4247-81c8-b2641466c3ab",

  /* ---------- HOME PAGE ---------- */
  mission: "With over five years of experience in multimedia, productions, and trailers, MC Productions has developed a new approach across a multitude of art forms, one that will not only meet client needs but exceed them.",

  trailers: [
    { title: "FallOut London Teaser", url: "https://youtu.be/VWYAU3HW_y0", note: "Teaser" },
    { title: "Trailer Two",   url: "", note: "Teaser" },
    { title: "Trailer Three", url: "", note: "Behind the scenes" },
  ],

  /* Wedding photos we edited (home page gallery) */
  weddings: [
    { title: "The Rings", img: "images/weddings/rings.jpg", note: "Detail shot" },
    { title: "Red Truck Kiss", img: "images/weddings/truck-kiss.jpg", note: "Colour grade" },
    { title: "Red Truck Kiss", img: "images/weddings/truck-kiss-bw.jpg", note: "Black and white edit" },
    { title: "Just Married", img: "images/weddings/truck-laugh.jpg", note: "Colour grade" },
    { title: "Golden Hour Portrait", img: "images/weddings/golden-hour-portrait.jpg", note: "Colour grade" },
    { title: "Golden Hour", img: "images/weddings/golden-hour-close.jpg", note: "Colour grade" },
    { title: "Golden Hour", img: "images/weddings/golden-hour-close-bw.jpg", note: "Black and white edit" },
    { title: "Forehead Kiss", img: "images/weddings/forehead-kiss.jpg", note: "Colour grade" },
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
      { title: "Trail",            img: "images/trail.jpg",    note: "Landscape" },      { title: "Sunset Silhouettes", img: "images/photos/sunset-silhouettes.jpg", note: "Shoreline" },
      { title: "Bee and Bloom", img: "images/photos/bee-and-bloom.jpg", note: "Macro" },
      { title: "Lamp Shadow", img: "images/photos/lamp-shadow.jpg", note: "Light study" },
      { title: "Blue Room", img: "images/photos/blue-room.jpg", note: "Light study" },
      { title: "Space Needle", img: "images/photos/space-needle.jpg", note: "Black and white" },
      { title: "Waterfall", img: "images/photos/waterfall.jpg", note: "Landscape" },
      { title: "Lake at Sunset", img: "images/photos/lake-at-sunset.jpg", note: "Landscape" },
      { title: "Lake in Monochrome", img: "images/photos/lake-in-monochrome.jpg", note: "Black and white" },
      { title: "Red Sun", img: "images/photos/red-sun.jpg", note: "Photo edit" },
      { title: "Mirror", img: "images/photos/mirror.jpg", note: "Photo edit" },
      { title: "Bark and Moss", img: "images/photos/bark-and-moss.jpg", note: "Macro" },
      { title: "Tree in the Mist", img: "images/photos/tree-in-the-mist.jpg", note: "Photo edit" },
    ],
    /* Game screenshots Malcolm took (virtual photography) */
    games: [
      { title: "Capture #1", img: "images/games/virtual-photography-01.jpg", note: "Virtual photography" },
      { title: "Capture #2", img: "images/games/virtual-photography-02.jpg", note: "Virtual photography" },
      { title: "Capture #3", img: "images/games/virtual-photography-03.jpg", note: "Virtual photography" },
      { title: "Capture #4", img: "images/games/virtual-photography-04.jpg", note: "Virtual photography" },
      { title: "Capture #5", img: "images/games/virtual-photography-05.jpg", note: "Virtual photography" },
      { title: "Capture #6", img: "images/games/virtual-photography-06.jpg", note: "Virtual photography" },
      { title: "Final Fantasy VII Rebirth #1", img: "images/games/final-fantasy-vii-rebirth-01.jpg", note: "In-game photo mode" },
      { title: "Gotham Knights #1", img: "images/games/gotham-knights-01.jpg", note: "In-game photo mode" },
      { title: "Horizon Forbidden West #1", img: "images/games/horizon-forbidden-west-01.jpg", note: "In-game photo mode" },
      { title: "Marvel's Spider-Man 2 #1", img: "images/games/marvel-s-spider-man-2-01.jpg", note: "In-game photo mode" },
      { title: "Marvel's Spider-Man 2 #2", img: "images/games/marvel-s-spider-man-2-02.jpg", note: "In-game photo mode" },
      { title: "Marvel's Spider-Man 2 #3", img: "images/games/marvel-s-spider-man-2-03.jpg", note: "In-game photo mode" },
      { title: "Warhammer 40,000: Space Marine 2 #1", img: "images/games/warhammer-40-000-space-marine-2-01.jpg", note: "In-game photo mode" },
      { title: "Warhammer 40,000: Space Marine 2 #2", img: "images/games/warhammer-40-000-space-marine-2-02.jpg", note: "In-game photo mode" },
      { title: "Warhammer 40,000: Space Marine 2 #3", img: "images/games/warhammer-40-000-space-marine-2-03.jpg", note: "In-game photo mode" },
      { title: "Warhammer 40,000: Space Marine 2 #4", img: "images/games/warhammer-40-000-space-marine-2-04.jpg", note: "In-game photo mode" },
      { title: "Warhammer 40,000: Space Marine 2 #5", img: "images/games/warhammer-40-000-space-marine-2-05.jpg", note: "In-game photo mode" },
      { title: "Warhammer 40,000: Space Marine 2 #6", img: "images/games/warhammer-40-000-space-marine-2-06.jpg", note: "In-game photo mode" },
      { title: "Warhammer 40,000: Space Marine 2 #7", img: "images/games/warhammer-40-000-space-marine-2-07.jpg", note: "In-game photo mode" },
      { title: "Warhammer 40,000: Space Marine 2 #8", img: "images/games/warhammer-40-000-space-marine-2-08.jpg", note: "In-game photo mode" },
      { title: "Warhammer 40,000: Space Marine 2 #9", img: "images/games/warhammer-40-000-space-marine-2-09.jpg", note: "In-game photo mode" },
      { title: "Warhammer 40,000: Space Marine 2 #10", img: "images/games/warhammer-40-000-space-marine-2-10.jpg", note: "In-game photo mode" },
      { title: "Warhammer 40,000: Space Marine 2 #11", img: "images/games/warhammer-40-000-space-marine-2-11.jpg", note: "In-game photo mode" },
      { title: "Warhammer 40,000: Space Marine 2 #12", img: "images/games/warhammer-40-000-space-marine-2-12.jpg", note: "In-game photo mode" },
      { title: "Warhammer 40,000: Space Marine 2 #13", img: "images/games/warhammer-40-000-space-marine-2-13.jpg", note: "In-game photo mode" },
      { title: "Warhammer 40,000: Space Marine 2 #14", img: "images/games/warhammer-40-000-space-marine-2-14.jpg", note: "In-game photo mode" },
      { title: "Warhammer 40,000: Space Marine 2 #15", img: "images/games/warhammer-40-000-space-marine-2-15.jpg", note: "In-game photo mode" },
    ],
  },

  /* ---------- COLE'S PAGE ---------- */
  cole: {
    bio: "Video editor and programmer. One half of MC Productions.",
    edits: [
      { title: "Editing Reel", url: "https://www.youtube.com/watch?v=4NnF5rzxVTw", note: "Editing reel" },
      { title: "Capture Reel 2024", url: "https://drive.google.com/file/d/1rxkeFzeGHFG87lgmlJAzIND_Eb88jbyi/view", note: "Capture reel" },
      { title: "Horror Music Video", url: "https://youtu.be/-RIMTT7e7gU", note: "Music video edit" },
      { title: "Beauty: A Poetic Documentary", url: "https://youtu.be/DJLqckshhu8", note: "Poetic documentary" },
      { title: "Masculinity", url: "https://youtu.be/uj4uCdC-RaM", note: "Video essay" },
      { title: "What Cons Are Like", url: "https://youtu.be/7bPcYitOz2M", note: "Comic Con short documentary" },
    ],
    /* Podcast I recorded, edited and animated (Malcolm guest stars) */
    podcast: [
      { title: "Pod 9: Obsessed", url: "https://youtu.be/2WLKvxZTCCU", note: "Anonymous Storytellers · strong language" },
      { title: "Pod 8: My Property Isn't Normal, Part 6", url: "https://youtu.be/9KM_lbnQMeM", note: "Anonymous Storytellers · strong language" },
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
