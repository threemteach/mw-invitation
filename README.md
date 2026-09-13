# 💍 Elegant Wedding Invitation Web App

A luxury, interactive wedding invitation web application featuring a romantic envelope intro screen, background music playback, elegant floral typography, live countdown, calendar integration, interactive photo gallery with lightbox, RSVP confirmation modal, Google Maps venue navigation, timeline schedule, guestbook with AI suggestions, and animated gift box.

---

## ✨ Features

- **💌 Envelope Opening Experience**:
  - Deep romantic gradient background with ambient falling flower petals.
  - Ivory card with a pulsing wax seal heart badge.
  - Calligraphy couple typography (*Julian & Arabella*).
  - Shimmering **Open** button that triggers an envelope fly-away animation, starts the romantic background music, and smoothly reveals the wedding invitation.
- **🎵 Romantic Audio Player**:
  - Audio track starts playing upon clicking "Open".
  - Floating vinyl music disc toggle to mute or resume playback at any time.
- **🌹 Crystal Floral Blue Theme**:
  - Porcelain navy (`#215589`) and warm ivory (`#FBF8F3`) palette.
  - Elegant floral frame and watercolor garlands.
- **📅 Ceremony & Reception Details**:
  - Formal parents' announcement.
  - Ceremony date & time.
  - Reception venue with live **Countdown Timer** (days, hours, minutes, seconds).
  - Highlighted **October 2026 Calendar Widget** with a heart badge on day 17 and a Google Calendar export link.
- **🖼️ Photo Gallery & Lightbox**:
  - 2x2 grid layout with `+5` extra photo indicator.
  - Fullscreen interactive lightbox modal with keyboard navigation (Arrows & Escape) and thumbnail navigation.
- **📝 Attendance RSVP Modal**:
  - Interactive popup modal to confirm attendance and specify number of guests with celebratory confetti effects.
- **📍 Reception Venue & Map**:
  - Address and embedded Google Maps view with one-click directions.
- **🎨 Dress Code Swatches**:
  - Visual color palette circles with color names.
- **⏰ Wedding Day Timeline**:
  - Milestone schedule with time badges and connected timeline line.
- **✍️ Interactive Guestbook**:
  - Guests can post their blessings.
  - Built-in **AI Suggestion Wand (🪄)** that populates heartfelt wishes.
  - Wishes are saved and displayed dynamically.
- **🎁 3D Animated Gift Box**:
  - Floating bobbing gift box with sparkling stars and confetti particles.
  - Click to open bank QR code modal with account details and one-click copy.
- **🔒 Source Code Protection & Minification**:
  - Configured with `sourcemap: false` and Terser mangling so your original React TypeScript code is not exposed in browser DevTools when deployed to Vercel or GitHub.

---

## 🚀 Getting Started Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```
   The production-ready, minified and protected build will be in the `dist/` directory.

4. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 🎨 How to Customize Information

All texts, names, dates, parents, photos, timeline events, and bank information can be customized in a single file:
👉 **[`src/data/invitationData.ts`](file:///c:/Users/mahmo/Downloads/MNinvitation/src/data/invitationData.ts)**

- **Groom & Bride Names**: update `groom` and `bride` fields.
- **Wedding Date & Time**: update `weddingDate`, `ceremony.time`, `reception.time`.
- **Photos**: add your photos to `public/images/gallery/` and list them in `gallery`.
- **Background Music**: place your song in `public/audio/` and update `musicUrl`.
- **Bank / Gift QR**: update `gift.bankName`, `gift.accountNumber`, and `gift.accountName`.

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial wedding invitation"
   git branch -M main
   git remote add origin <YOUR_GITHUB_REPO_URL>
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. The preset will be detected automatically (**Vite**, Output Directory: `dist`). Click **"Deploy"**.

### Deploy to GitHub Pages
A GitHub Actions workflow is already included at `.github/workflows/deploy.yml`.
1. Go to your GitHub repository -> **Settings** -> **Pages**.
2. Under **Build and deployment** -> **Source**, select **GitHub Actions**.
3. Push to `main` and your site will be live automatically!
