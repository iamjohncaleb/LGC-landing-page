import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

const width = 2048;
const height = 680;

const logo = await readFile(new URL("../public/legendary-logo.jpg", import.meta.url));
const astronaut = await readFile(new URL("../public/astronaut-hero.png", import.meta.url));

const logoData = `data:image/jpeg;base64,${logo.toString("base64")}`;
const astronautData = `data:image/png;base64,${astronaut.toString("base64")}`;

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="emberGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1450 260) rotate(143) scale(880 620)">
      <stop stop-color="#ff5a00" stop-opacity=".35"/>
      <stop offset=".48" stop-color="#2b1206" stop-opacity=".2"/>
      <stop offset="1" stop-color="#050505" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="title" x1="98" y1="186" x2="770" y2="186" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ffffff"/>
      <stop offset=".52" stop-color="#f5f0ea"/>
      <stop offset="1" stop-color="#ff6a1a"/>
    </linearGradient>
    <linearGradient id="tag" x1="0" y1="0" x2="220" y2="0" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ff5a00" stop-opacity=".2"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity=".05"/>
    </linearGradient>
    <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="30" stdDeviation="28" flood-color="#000000" flood-opacity=".45"/>
    </filter>
    <filter id="orangeShadow" x="-60%" y="-60%" width="220%" height="220%">
      <feDropShadow dx="0" dy="0" stdDeviation="18" flood-color="#ff5a00" flood-opacity=".55"/>
    </filter>
    <clipPath id="logoClip">
      <circle cx="148" cy="178" r="56"/>
    </clipPath>
    <clipPath id="screenClip">
      <rect x="0" y="0" width="310" height="430" rx="28"/>
    </clipPath>
    <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
      <circle cx="3" cy="3" r="1.7" fill="#ff5a00" opacity=".28"/>
    </pattern>
  </defs>

  <rect width="${width}" height="${height}" fill="#050505"/>
  <rect width="${width}" height="${height}" fill="url(#emberGlow)"/>
  <path d="M-90 600C246 468 430 610 764 468C1116 318 1300 84 2080 108" stroke="#ff5a00" stroke-opacity=".16" stroke-width="2"/>
  <path d="M-130 148C264 224 476 108 800 158C1228 224 1428 434 2124 314" stroke="#ffffff" stroke-opacity=".06" stroke-width="2"/>
  <rect x="1902" y="34" width="112" height="112" fill="url(#dots)" opacity=".7"/>
  <rect x="-4" y="-4" width="94" height="94" rx="22" fill="#ff5a00" opacity=".16"/>
  <rect x="1970" y="556" width="112" height="112" rx="36" fill="#ff5a00" opacity=".2"/>

  <g filter="url(#softShadow)">
    <circle cx="148" cy="178" r="66" fill="#130905" stroke="#ff5a00" stroke-width="3"/>
    <image href="${logoData}" x="92" y="122" width="112" height="112" preserveAspectRatio="xMidYMid slice" clip-path="url(#logoClip)"/>
  </g>

  <text x="240" y="215" fill="url(#title)" font-family="Inter, Arial, sans-serif" font-size="82" letter-spacing="-2">
    Legendary <tspan fill="#ff5a00">Consults</tspan>
  </text>
  <text x="96" y="326" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="48" letter-spacing="-.5">
    Next.js Digital Agency Landing Page
  </text>
  <text x="96" y="394" fill="#c9c4bd" font-family="Inter, Arial, sans-serif" font-size="31">
    Premium astronaut-inspired agency website with services,
  </text>
  <text x="96" y="438" fill="#c9c4bd" font-family="Inter, Arial, sans-serif" font-size="31">
    portfolio, blog, lead forms, Web3 pages, and theme support.
  </text>

  <g transform="translate(96 490)">
    <rect width="630" height="66" rx="18" fill="#0c0c0d" stroke="#ff5a00" stroke-opacity=".32"/>
    <g transform="translate(24 17)">
      <rect width="30" height="30" rx="8" fill="#ff5a00" opacity=".22"/>
      <path d="M10 16h11m-5.5-5.5V21.5" stroke="#ff7a1a" stroke-width="3" stroke-linecap="round"/>
    </g>
    <text x="74" y="41" fill="#f8f7f4" font-family="Inter, Arial, sans-serif" font-size="24">Next.js</text>
    <circle cx="190" cy="33" r="3" fill="#7d746d"/>
    <text x="214" y="41" fill="#f8f7f4" font-family="Inter, Arial, sans-serif" font-size="24">Tailwind CSS</text>
    <circle cx="392" cy="33" r="3" fill="#7d746d"/>
    <text x="416" y="41" fill="#f8f7f4" font-family="Inter, Arial, sans-serif" font-size="24">Framer Motion</text>
  </g>

  <g transform="translate(1015 64)" opacity=".96">
    <image href="${astronautData}" x="360" y="-18" width="610" height="610" preserveAspectRatio="xMidYMid slice" opacity=".74"/>

    <g transform="translate(44 112) rotate(-7)" filter="url(#softShadow)">
      <rect width="310" height="430" rx="28" fill="#080808" stroke="#ff5a00" stroke-opacity=".34"/>
      <g clip-path="url(#screenClip)">
        <rect width="310" height="430" fill="#0b0b0c"/>
        <rect x="22" y="38" width="120" height="14" rx="7" fill="#ffffff" opacity=".75"/>
        <rect x="22" y="70" width="230" height="88" rx="18" fill="url(#tag)" stroke="#ff5a00" stroke-opacity=".35"/>
        <rect x="44" y="188" width="88" height="88" rx="18" fill="#ff5a00" opacity=".18"/>
        <rect x="154" y="188" width="88" height="88" rx="18" fill="#ffffff" opacity=".07"/>
        <rect x="22" y="310" width="250" height="18" rx="9" fill="#ffffff" opacity=".2"/>
        <rect x="22" y="346" width="190" height="18" rx="9" fill="#ff5a00" opacity=".55"/>
      </g>
    </g>

    <g transform="translate(318 36)" filter="url(#softShadow)">
      <rect width="330" height="502" rx="32" fill="#0a0a0b" stroke="#ff5a00" stroke-opacity=".42"/>
      <rect x="22" y="24" width="286" height="118" rx="24" fill="#ff5a00" opacity=".17"/>
      <text x="36" y="64" fill="#ffffff" opacity=".86" font-family="Inter, Arial, sans-serif" font-size="19">Legendary Consults</text>
      <text x="36" y="106" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="36">Launch Faster</text>
      <rect x="24" y="178" width="78" height="70" rx="18" fill="#ff5a00" opacity=".2"/>
      <rect x="126" y="178" width="78" height="70" rx="18" fill="#ffffff" opacity=".07"/>
      <rect x="228" y="178" width="78" height="70" rx="18" fill="#ffffff" opacity=".07"/>
      <rect x="24" y="288" width="282" height="42" rx="14" fill="#ffffff" opacity=".08"/>
      <rect x="24" y="348" width="282" height="42" rx="14" fill="#ffffff" opacity=".08"/>
      <rect x="24" y="408" width="282" height="42" rx="14" fill="#ff5a00" opacity=".46"/>
    </g>

    <g transform="translate(668 112) rotate(5)" filter="url(#softShadow)">
      <rect width="310" height="430" rx="28" fill="#080808" stroke="#ff5a00" stroke-opacity=".34"/>
      <rect x="28" y="40" width="160" height="16" rx="8" fill="#ffffff" opacity=".75"/>
      <rect x="28" y="92" width="252" height="96" rx="22" fill="#ffffff" opacity=".07"/>
      <rect x="52" y="226" width="88" height="88" rx="16" fill="#ff5a00" opacity=".2"/>
      <rect x="168" y="226" width="88" height="88" rx="16" fill="#ffffff" opacity=".08"/>
      <rect x="28" y="350" width="210" height="18" rx="9" fill="#ffffff" opacity=".2"/>
      <rect x="28" y="382" width="160" height="18" rx="9" fill="#ff5a00" opacity=".45"/>
    </g>
  </g>

  <g transform="translate(840 56)" filter="url(#orangeShadow)">
    <path d="M52 0l14 36 38 3-30 24 9 37-31-20-32 20 9-37-29-24 37-3L52 0z" fill="#ffffff" opacity=".75"/>
  </g>
  <g transform="translate(827 152)" filter="url(#orangeShadow)">
    <path d="M24 0l7 17 18 2-14 11 4 18-15-10-15 10 4-18L0 19l17-2L24 0z" fill="#ffb088" opacity=".85"/>
  </g>
</svg>`;

const svgPath = new URL("../public/readme-assets/legendary-consults-thumbnail.svg", import.meta.url);
const pngPath = new URL("../public/readme-assets/legendary-consults-thumbnail.png", import.meta.url);

await writeFile(svgPath, svg);
await sharp(Buffer.from(svg)).png().toFile(pngPath.pathname);

console.log("Generated README thumbnail:");
console.log(svgPath.pathname);
console.log(pngPath.pathname);
