<div align="center">

  # ✦ SHAN ✦
  ### CREATIVE FULL STACK DEVELOPER & INTERACTIVE WEB ENGINEER

  <p align="center">
    <i>"Building immersive digital experiences where design, motion, and engineering become one."</i>
  </p>

  <p align="center">
    <a href="https://shan.dev"><img src="https://img.shields.io/badge/Portfolio-shan.dev-00D9FF?style=for-the-badge&logo=vercel&logoColor=000" alt="Portfolio Badge"/></a>
    <a href="https://react.dev"><img src="https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=000" alt="React Badge"/></a>
    <a href="https://threejs.org"><img src="https://img.shields.io/badge/Three.js-WebGL-000000?style=for-the-badge&logo=three.js&logoColor=fff" alt="Three.js Badge"/></a>
    <a href="https://gsap.com"><img src="https://img.shields.io/badge/GSAP-Animation-88CE02?style=for-the-badge&logo=greensock&logoColor=fff" alt="GSAP Badge"/></a>
    <a href="https://supabase.com"><img src="https://img.shields.io/badge/Supabase-Database-3ECF8E?style=for-the-badge&logo=supabase&logoColor=fff" alt="Supabase Badge"/></a>
  </p>

  ---
</div>

## 📌 Executive Overview

This repository houses the source code for **Shan's Awwwards-level interactive portfolio website**. Designed with an uncompromising balance of visual storytelling and software engineering, the platform blends a 3D WebGL hand-drawn notebook aesthetic with high-performance full stack architecture.

Inspired by Apple, Stripe, Linear, and Framer, the application challenges conventional web layouts through:
- Real-time 3D spatial navigation & virtual room routing
- High-precision scrollytelling & 360° image sequence scrubbers
- Hand-drawn line-art sketch aesthetics & custom shader material reveals
- Accessible HTML screen-reader overlays matching WebGL canvas viewports

---

## ✨ Core Features & Technical Highlights

### 🎨 1. Interactive 3D Spatial Canvas
- **Hero Corridor**: Real-time camera depth navigation with split-letter typography shaders and a custom hand-drawn sketch avatar.
- **The About Sky**: Infinite looping 3D cloud viewports featuring floating capability cards, roadmap islands, and skill balloons.
- **The Gallery**: Interactive paper-texture project cards with spatial WebGL depth tilts and project case study modals.
- **The Studio**: Rotating monitor towers displaying technical case studies and WebGL micro-interaction demos.
- **Contact Sea**: Floating 3D social barrels and interactive message paper submission workflow.

### ⚡ 2. Performance Engineering & Core Web Vitals
- **Sub-Second Load Times**: Compressed WebP texture pipelines with lazy asset preloading strategies.
- **60 FPS Sustained Renders**: Optimized `@react-three/fiber` render loop with zero garbage collection spikes in `useFrame`.
- **Fluid Smooth Scroll**: High-precision scroll synchronization powered by GSAP ScrollTrigger and Lenis smooth scroll mechanics.

### ✏️ 3. Hand-Drawn Sketch Design System
- **Custom Typography**: Integrated `Rubik Scribble` & `Cabin Sketch` Google TTF typefaces.
- **Custom Shaders**: `RevealBasicMaterial` brush-stroke reveal shaders for card hovers and canvas transitions.
- **Personal Avatar**: Custom hand-drawn line-art avatar sprite matching real-world personal identity.

### ♿ 4. Accessibility & Inclusive Design (WCAG 2.1 AA)
- **ScreenReaderOverlay**: Invisible HTML accessibility layer synced to 3D canvas coordinates for screen readers and keyboard navigation.
- **Reduced Motion Support**: Automated GSAP animation fallbacks respecting user `prefers-reduced-motion` browser settings.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology Stack |
| :--- | :--- |
| **Frontend Framework** | React 18, Vite 6, HTML5, Vanilla CSS3 (Custom Tokens) |
| **3D & WebGL Engine** | Three.js, `@react-three/fiber`, `@react-three/drei` |
| **Animation Physics** | GSAP 3 (ScrollTrigger, Observer), Framer Motion, Lenis |
| **Backend & APIs** | Node.js, Express.js REST APIs |
| **Database & Auth** | Supabase, PostgreSQL |
| **Asset Pipeline** | WebP Texture Optimization, Troika-3D Text (.ttf) |
| **Deployment & Host** | Vercel / Cloudflare Edge Infrastructure |

---

## 💼 Featured Flagship Projects

### 1. Apple Vision Pro Interactive Experience
> *Spatial Computing & 3D Canvas Rendering*
- **Technologies**: React, Three.js, WebGL Shaders, GSAP ScrollTrigger
- **Key Features**: Frame-by-frame 3D canvas interaction, luxury depth glass shaders, spatial parallax mechanics.
- **Performance**: Sustained 60FPS across 120 high-res WebP canvas frames.

### 2. BMW M4 GT3 EVO Showcase
> *High-Performance Automotive & Web Audio Synthesis*
- **Technologies**: React, Web Audio API, Canvas 360°, GSAP Physics
- **Key Features**: Multi-threaded pre-buffered image scrubbers, real-time telemetry HUD, Web Audio doppler pitch shifts.
- **Performance**: Sub-100ms response time on 360° rotation interactions.

### 3. Luxury Tailor Website
> *Haute Couture Atelier & WebGL Fabric Motion*
- **Technologies**: React, Three.js, WebGL Canvas, CSS Grid
- **Key Features**: Custom WebGL fabric warp shaders, editorial serif typography, interactive garment sizing matrix.
- **Performance**: 99/100 Lighthouse performance score.

### 4. Fashion Jewellery Ecommerce Engine
> *Full Stack Luxury E-Commerce Engine*
- **Technologies**: Next.js, Supabase, PostgreSQL, Cloudinary REST API
- **Key Features**: Sub-second faceted edge filtering, optimistic cart state sync, real-time stock sync.
- **Performance**: 0.4s Time-to-First-Byte (TTFB).

### 5. Photography Accessories Platform
> *Relational Compatibility Matrix Engine*
- **Technologies**: Express.js, Node.js, PostgreSQL, React
- **Key Features**: Lens compatibility matrix engine, dark room UI, indexed database queries.
- **Performance**: Sub-50ms API response time.

---

## 📁 Repository Structure

```
shan-portfolio-new/
├── public/
├── src/
│   ├── components/
│   │   ├── canvas/             # 3D WebGL Scenes & Rooms
│   │   │   ├── corridor/       # Hero 3D Corridor, HeroText, Avatar
│   │   │   ├── entrance/       # Gate, Doors & Sign System
│   │   │   └── rooms/          # About, Gallery, Studio, Contact Rooms
│   │   ├── dom/                # DOM Components & Preloader
│   │   ├── ui/                 # Accessibility Overlays & Navigation
│   │   ├── CaseStudyModal.jsx  # Comprehensive Case Study Modal
│   │   └── ContactForm.jsx     # Agency Inquiry Form Component
│   ├── context/                # Scene, Audio & Achievement Contexts
│   ├── data/                   # Projects, Skills & Journey Data Models
│   │   ├── projects.js         # Flagship Projects & Case Studies
│   │   ├── skills.js           # 5 Tech Stack Categories
│   │   └── journey.js          # 6 Experience Stages
│   ├── hooks/                  # Document Metadata & Scene Hooks
│   ├── sections/               # Main Page HTML Sections
│   │   ├── Hero.jsx            # Hero Branding & Headline
│   │   ├── About.jsx           # Personal Biography & 6 Highlight Cards
│   │   ├── CreatorBuilder.jsx  # Core Philosophy Pillars
│   │   ├── Projects.jsx        # Project Portfolio Grid
│   │   ├── Contact.jsx         # Contact Form & Copy Email Trigger
│   │   └── Footer.jsx          # Branding Footer
│   ├── styles/                 # SCSS & CSS Modules
│   └── index.css               # Core CSS Design System & Token Variables
├── index.html                  # SEO & JSON-LD Structured Data Schema
└── package.json
```

---

## 🚀 Local Development & Setup

### Prerequisites
- Node.js `v18.0.0` or higher
- npm `v9.0.0` or higher

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shan/shan-portfolio.git
   cd shan-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📬 Contact & Connect

- **Name**: Shan
- **Title**: Creative Full Stack Developer
- **Location**: India 🇮🇳 (UTC +5:30)
- **Direct Email**: [contact@shan.dev](mailto:contact@shan.dev)
- **Portfolio URL**: [https://shan.dev](https://shan.dev)
- **Social Profiles**: [GitHub](https://github.com) • [LinkedIn](https://linkedin.com) • [Twitter / X](https://twitter.com)

---

<div align="center">
  <p>Designed with intention. Engineered for performance.</p>
  <p>© 2026 <b>SHAN</b>. All rights reserved.</p>
</div>
# sketch-portfolio
# sketch-portfolio
