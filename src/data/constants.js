export const PALETTES = [
  ["#f1ebdd", "#181612", "#b85638", "#3c7a86", "#e8c870"], // warm editorial
  ["#ece6dc", "#1a1a1a", "#5c4ddb", "#d94f7e", "#f5c542"], // electric mag
  ["#e9e4d8", "#1d2a23", "#3f8a5b", "#c0683c", "#d8c98a"], // botanical
  ["#0e0e10", "#f3efe6", "#ff6a3d", "#7fb7be", "#f7d774"], // dark mode
  ["#f4ede0", "#2a2017", "#a23030", "#2f5d50", "#e2b75e"], // ochre / brick
];

export const FONT_PAIRS = {
  "instrument-grotesk": {
    label: "Instrument × Grotesk",
    display: '"Instrument Serif", "Times New Roman", serif',
    ui: '"Space Grotesk", ui-sans-serif, system-ui, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, monospace',
  },
  "editorial-mono": {
    label: "DM Serif × IBM Mono",
    display: '"DM Serif Display", "Times New Roman", serif',
    ui: '"Inter Tight", ui-sans-serif, system-ui, sans-serif',
    mono: '"IBM Plex Mono", ui-monospace, monospace',
  },
  "classic-grotesque": {
    label: "EB Garamond × Manrope",
    display: '"EB Garamond", "Times New Roman", serif',
    ui: '"Manrope", ui-sans-serif, system-ui, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, monospace',
  },
  "modern-pair": {
    label: "Bodoni Moda × Geist",
    display: '"Bodoni Moda", "Times New Roman", serif',
    ui: '"Geist", ui-sans-serif, system-ui, sans-serif',
    mono: '"Geist Mono", ui-monospace, monospace',
  },
};

export const PROJECTS = [
  {
    tag: "01 / Marketplace · Fashion",
    name: "Rewa, <em>The Ebi</em><br/>Closet",
    desc: "A marketplace for people ready to rent or sell their Aso Ebi. Full transactional flows on Sharetribe, with a React front-end tuned for Nigerian fashion buyers.",
    stack: "React · Node · Sharetribe SDK",
    role: "Fullstack — design + build",
    year: "2025",
    url: "https://rewaebicloset.com",
    vizClass: "viz-rewa",
  },
  {
    tag: "02 / Static site · Aviation",
    name: "<em>Lux</em> Voyage<br/>Airways",
    desc: "A static site for Lux Voyage Airways showcasing the airline and letting customers sign up. Three.js cabin moments, MailJS forms, Express back end.",
    stack: "React · Three.js · MailJS · Express",
    role: "Fullstack & 3D",
    year: "2025",
    url: "https://luxvoyageairways.com",
    vizClass: "viz-lux",
  },
  {
    tag: "03 / Booking · Events",
    name: "Honey Touch<br/><em>Events</em>",
    desc: "A dynamic site showcasing an event planner's work and letting users book consultations end-to-end.",
    stack: "React · MailJS · Express",
    role: "Fullstack",
    year: "2025",
    url: "https://honeytouchevents.com",
    vizClass: "viz-honey",
  },
  {
    tag: "04 / Hospitality · Booking",
    name: "<em>Regnum</em><br/>Pavilion",
    desc: "A dynamic hotel site letting guests browse rooms, make reservations and send inquiries. Backed by Supabase.",
    stack: "React · Node · Supabase",
    role: "Fullstack",
    year: "2026",
    url: "https://regnumpav.com",
    vizClass: "viz-regnum",
  },
];

export const CERTS = [
  {
    num: "01",
    title: "Oracle Cloud\nInfrastructure",
    issuer: "Oracle",
    year: "2025",
    badge: "OCI",
    badgeBg: null,
  },
  {
    num: "02",
    title: "Google Cloud\nSecurity",
    issuer: "Coursera · Google",
    year: "2026",
    badge: "GCS",
    badgeBg: "var(--accent-2)",
  },
];

export const TECHS = [
  "React", "TypeScript", "Node.js", "Supabase",
  "mySQL", "Three.js", "UI/UX", "Oracle Cloud",
];

export const CHIPS = [
  "React", "TypeScript", "JavaScript", "Node.js",
  "Express", "mySQL", "Supabase", "Sharetribe",
  "Three.js", "UI/UX", "Oracle Cloud", "Google Cloud",
];
