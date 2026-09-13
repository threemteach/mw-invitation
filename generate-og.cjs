const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createOgImage() {
  const width = 1200;
  const height = 630;

  // Read local floral decor assets if available to base64 encode
  let floralLeft = '';
  let floralRight = '';
  try {
    const f1 = fs.readFileSync(path.join(__dirname, 'public/images/decor/floral-left.webp'));
    floralLeft = `data:image/webp;base64,${f1.toString('base64')}`;
    const f2 = fs.readFileSync(path.join(__dirname, 'public/images/decor/floral-right.webp'));
    floralRight = `data:image/webp;base64,${f2.toString('base64')}`;
  } catch (e) {
    console.warn('Decor files not found, using SVG florals', e);
  }

  // Create crisp SVG banner with exact details
  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#122e4d"/>
        <stop offset="50%" stop-color="#1f4f80"/>
        <stop offset="100%" stop-color="#2d67a1"/>
      </linearGradient>

      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#d4af37"/>
        <stop offset="50%" stop-color="#f3e5ab"/>
        <stop offset="100%" stop-color="#aa7c11"/>
      </linearGradient>

      <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="125%">
        <feDropShadow dx="0" dy="15" stdDeviation="25" flood-color="#000000" flood-opacity="0.45"/>
      </filter>
    </defs>

    <!-- Background -->
    <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>

    <!-- Decorative Corner Petals in Background -->
    <circle cx="80" cy="80" r="140" fill="#ffffff" opacity="0.03"/>
    <circle cx="1120" cy="550" r="160" fill="#ffffff" opacity="0.03"/>

    <!-- Inner Card -->
    <g filter="url(#cardShadow)">
      <rect x="140" y="55" width="920" height="520" rx="20" fill="#FBF8F3" stroke="#215589" stroke-opacity="0.25" stroke-width="2"/>
      <rect x="152" y="67" width="896" height="496" rx="14" fill="none" stroke="#215589" stroke-opacity="0.15" stroke-width="1" stroke-dasharray="6,4"/>
    </g>

    <!-- Floral Corners -->
    ${floralLeft ? `<image href="${floralLeft}" x="120" y="35" width="170" height="170" opacity="0.95"/>` : ''}
    ${floralRight ? `<image href="${floralRight}" x="900" y="415" width="170" height="170" opacity="0.95"/>` : ''}

    <!-- Heart Wax Seal Icon -->
    <g transform="translate(600, 125)">
      <circle cx="0" cy="0" r="32" fill="#215589" filter="drop-shadow(0 4px 10px rgba(33,85,137,0.5))"/>
      <path d="M0 12 L-1.4 -1.3 C-5.5 -5 -8 -7.5 -8 -11 C-8 -13.8 -5.8 -16 -3 -16 C-1.4 -16 0 -15.2 0 -14 C0 -15.2 1.4 -16 3 -16 C5.8 -16 8 -13.8 8 -11 C8 -7.5 5.5 -5 1.4 -1.3 Z" fill="#FBF8F3" transform="scale(1.3) translate(0, -2)"/>
    </g>

    <!-- Typography -->
    <!-- Couple Names -->
    <text x="600" y="240" font-family="'Times New Roman', 'Baskerville', serif" font-size="62" font-weight="bold" fill="#215589" text-anchor="middle" letter-spacing="3">
      Mohamed &amp; Menna
    </text>

    <!-- Elegant Divider -->
    <line x1="420" y1="268" x2="550" y2="268" stroke="#215589" stroke-opacity="0.4" stroke-width="1.5"/>
    <text x="600" y="274" font-family="'Times New Roman', serif" font-size="22" fill="#215589" opacity="0.75" text-anchor="middle">❦</text>
    <line x1="650" y1="268" x2="780" y2="268" stroke="#215589" stroke-opacity="0.4" stroke-width="1.5"/>

    <!-- Wedding Invitation Heading -->
    <text x="600" y="320" font-family="'Times New Roman', serif" font-size="24" font-weight="600" fill="#215589" text-anchor="middle" letter-spacing="6">
      WEDDING INVITATION
    </text>

    <!-- Date & Time -->
    <text x="600" y="375" font-family="'Times New Roman', 'Georgia', serif" font-size="30" font-weight="bold" fill="#215589" text-anchor="middle">
      Thursday, September 24, 2026 • 8:00 PM
    </text>

    <!-- Venue (English & Arabic) -->
    <text x="600" y="435" font-family="'Times New Roman', 'Arial', sans-serif" font-size="26" font-weight="bold" fill="#2F3A45" text-anchor="middle">
      El-Lo2lo2a Hall • قاعة اللؤلؤة
    </text>

    <text x="600" y="475" font-family="'Times New Roman', 'Arial', sans-serif" font-size="20" fill="#2F3A45" opacity="0.85" text-anchor="middle">
      شارع الشونة، مبنى نقابة النقل البري، كفر الدوار، البحيرة
    </text>

    <!-- Decorative Bottom Badge -->
    <g transform="translate(600, 525)">
      <rect x="-100" y="-16" width="200" height="32" rx="16" fill="#215589" opacity="0.1"/>
      <text x="0" y="6" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" fill="#215589" text-anchor="middle" letter-spacing="2">
        SAVE THE DATE
      </text>
    </g>
  </svg>
  `;

  const outputBuffer = await sharp(Buffer.from(svg))
    .jpeg({ quality: 95 })
    .toBuffer();

  const destPath = path.join(__dirname, 'public/images/og-preview.jpg');
  fs.writeFileSync(destPath, outputBuffer);

  // Also copy to brain folder so it can be previewed in chat artifact
  const brainPath = 'C:\\Users\\mahmo\\.gemini\\antigravity\\brain\\1eccbd32-7fbe-441f-aa70-9d6142039f35\\mohamed_menna_preview.jpg';
  fs.writeFileSync(brainPath, outputBuffer);

  console.log('Successfully created exact og-preview.jpg at:', destPath);
}

createOgImage().catch(console.error);
