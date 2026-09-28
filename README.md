# 🌿 Tree of Life Cafe — 3D Interactive Menu & Digital Order System

A modern, responsive, high-performance digital menu and real-time kitchen order slip system crafted for **Tree of Life Cafe**. Features an interactive 3D WebGL showcase, royal dark green and golden aesthetic, live WebSocket counter updates, and dual-mode storage (Supabase + local JSON fallback).

![Node.js](https://img.shields.io/badge/Node.js-v18+-68a063?style=flat&logo=node.js)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey?style=flat&logo=express)
![Three.js](https://img.shields.io/badge/Three.js-r128-black?style=flat&logo=three.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=flat&logo=tailwind-css)
![Socket.io](https://img.shields.io/badge/Socket.io-4.x-010101?style=flat&logo=socket.io)
![License](https://img.shields.io/badge/License-MIT-gold?style=flat)

---

## ✨ Features

### ☕ 3D WebGL Coffee Showcase & Micro-Interactions
- **Interactive Three.js 3D Model:** Interactive 3D artisan coffee cup featuring procedural barista latte art, drifting steam particle physics, saucer, and floating coffee beans.
- **Dynamic Category Lighting & Moods:** Lighting colors dynamically shift and adapt as users browse through espresso, cold brews, frappes, pizza, shakes, and desserts.
- **Mouse Gyro Tilt & Touch Pan:** Orbiting physics with natural tilt lerping on desktop, and non-blocking touch scroll support on mobile.
- **Golden Ambient Drifting Canvas:** Particle background rendered on HTML5 canvas with depth and subtle shimmer.
- **Synthesized Audio Engine:** Built-in Web Audio API sound effects for button presses, item selections, and celebratory ordering with zero external sound asset dependencies.

### 📱 Premium Royal Dark Green & Gold Design
- **Luxury Theme:** Deep forest green (`#08170b`, `#0c2413`) with polished royal gold accents (`#d4af37`, `#ffd700`) and backdrop glassmorphism.
- **Zero Horizontal Overflow:** Fine-tuned mobile layout preventing viewport clipping across small screens (320px–360px).
- **Smooth Category Dock:** Quick-jump navigation bar with auto-centering pills and active-state tracking.
- **Floating Mobile Cart:** Sleek bottom sheet cart badge with instant checkout transition.

### 🛎️ Live Real-time Kitchen Order Slip Dashboard (`/counter`)
- **Instant Synchronization:** Real-time bi-directional order updates powered by **Socket.io**.
- **Audio Alerts & Visual Cues:** Ding sound alerts and pulsing badges when new orders arrive.
- **Kitchen Order Management:** One-click status transitions (`New` → `Processing` → `Completed`).
- **Thermal Print Slip:** Built-in auto-print formatting for 80mm kitchen receipt printers.

### 💾 Dual Persistence Architecture
- **Supabase Cloud Database:** Automatic cloud sync when configured with `SUPABASE_URL` and `SUPABASE_KEY`.
- **Zero-Config Local Fallback:** Automatically falls back to resilient local JSON file storage (`data/orders.json`) when offline or running standalone.

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js** (v18 or higher)
- **npm** (v9 or higher)

### 2. Clone & Install
```bash
git clone https://github.com/sraju7213-wq/Menutol.git
cd Menutol
npm install
```

### 3. Build Tailwind CSS
```bash
npm run build:css
```

### 4. Configure Environment (Optional)
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
*(If you do not configure Supabase credentials, the system automatically uses the built-in local JSON order store).*

### 5. Start Development Server
```bash
npm run dev
```

Visit the application in your browser:
- **Customer Menu & Ordering:** [http://localhost:3000](http://localhost:3000)
- **Live Counter POS & Kitchen Slip:** [http://localhost:3000/counter](http://localhost:3000/counter)

---

## 📁 Project Structure

```text
├── api/                    # Serverless API routes (Vercel deployment)
├── data/
│   └── orders.json         # Local orders fallback datastore
├── public/
│   ├── counter.html        # Kitchen / POS Counter dashboard
│   ├── index.html          # Main customer interactive menu
│   ├── script.js           # Client menu logic & Socket.io integration
│   ├── scene3d.js          # Three.js 3D WebGL scene & Audio engine
│   ├── styles.css          # Custom styling & dark-green theme rules
│   ├── dist/
│   │   └── output.css      # Pre-compiled production Tailwind bundle
│   └── libs/
│       ├── three.min.js    # Three.js library bundle
│       └── confetti.browser.min.js
├── src/
│   └── input.css           # Tailwind source entrypoint
├── server.js               # Node.js Express server + Socket.io
├── tailwind.config.js      # Tailwind theme configuration
└── vercel.json             # Vercel deployment routes and builds
```

---

## 🛠️ Tech Stack

- **Frontend:** Vanilla JS (ES6+), HTML5 Canvas, Three.js, Tailwind CSS (Compiled), Canvas Confetti
- **Backend:** Node.js, Express.js, Socket.io
- **Database:** Supabase (PostgreSQL) with local JSON fallback
- **Audio:** Web Audio API (Synthesized oscillators and filters)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
