# Abhishek Portfolio — Better Version Portfolio

> **Immersive 3D ML Engineer portfolio for Abhishek — built with React 19, Three.js, React Three Fiber and GSAP, showcasing 5 AI/ML systems from construction intelligence to agentic missions.**

🌐 **Live Demo:** `https://abhishek.dev` _(configure via Cloudflare Pages — see Deployment)_  
📦 **Repository:** [abhishek14311431/Better_Version_Portfolio](https://github.com/abhishek14311431/Better_Version_Portfolio)

---

[![React 19](https://img.shields.io/badge/React-19.2.7-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.185-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![R3F](https://img.shields.io/badge/R3F-9.6-000000?style=for-the-badge&logo=react&logoColor=61DAFB)](https://docs.pmnd.rs/react-three-fiber)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://gsap.com/)
[![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Python](https://img.shields.io/badge/Python-3.8+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)

---

## ✨ Overview

**Better Version Portfolio** is Abhishek's rebranded sketch-book 3D portfolio — originally `shan-portfolio`, now `abhishek-portfolio` (`abhishek.dev`). It keeps the hand-drawn corridor, entrance doors and clothesline gallery, but is fully reskinned for a **Creative ML Engineer** identity: `ABHISHEK` 3D hero, `Creative • ML Engineer • Developer • Interactive` tagline, `Python / Random Forest / React.js / LLM` door stickers, and 5 flagship ML projects.

---

## 🚀 Key Features

- 🎭 **3D Hand-Drawn World — ABHISHEK** — `HeroText.jsx` now renders 8 letters `A-B-H-I-S-H-E-K` (spacing 0.40, `fontSize 0.52`) with split/dodge and float, corridor `ABHISHEK.DEV` sign
- 🚪 **ML Door Stickers** — `EntranceDoors.jsx` cards: `Python 🐍`, `Random Forest 🌲`, `React.js ⚛️` + `@abhishek.dev` kept, top banners `Creative Dev / Python / LLM / ML Engineer`
- 🖼️ **Gallery — 5 ML Projects** — Clothesline paper cards kept, front textures now related Unsplash photos, no flicker (`hasPainted` → always visible, hover reveal re-enabled), title `0.20→0.11` with wrap + outline
- 📦 **2D Grid + Case Study Modals** — `src/data/projects.js` replaced with Abhishek's 5 repos, single-line README summaries, matched tech stacks
- ⚡ **Adaptive Performance** — DPR/shadows/AA tiered, `filterTexturesByDevice` for hover vs touch
- 🎧 **Spatial Audio & Navigation** — `AudioManager`, map teleport, deep-link `useDocumentMeta` (`abhishek.dev`)

---

## 🧠 Featured Projects — 5 ML Systems

| # | Project | One-Line Summary | Tech Stack | GitHub |
|---|---------|------------------|------------|--------|
| 1 | **AI-Driven Construction Cost Estimation** | AI platform estimating construction costs across 6 project types with Random Forest valuations and PDF reports via FastAPI + React. | `Python, FastAPI, SQLAlchemy, SQLite, Pydantic, Uvicorn, ReportLab, React 19, Vite 7, Random Forest` | [AI-DRIVEN-CONSTRUCTION-COST-ESTIMATION](https://github.com/abhishek14311431/AI-DRIVEN-CONSTRUCTION-COST-ESTIMATION) |
| 2 | **Continuous Behavioral Authentication** | Zero-trust system verifying cursor and keystroke behavior every 2s with Isolation Forest to lock on impostors with 0% FAR. | `Python 3.8+, Scikit-learn Isolation Forest, Pandas, NumPy, pynput, StandardScaler, PyYAML, smtplib` | [Continuous-Behavioral-Authentication](https://github.com/abhishek14311431/AI-Driven-Continuous-Behavioral-Authentication-System) |
| 3 | **UniGuard — Unusual Login Activity Detection** | Unsupervised K-Means & DBSCAN detector scoring unusual university logins with FastAPI + React dashboard and Docker/Jenkins. | `Python, FastAPI, Pandas, Joblib, K-Means/DBSCAN, React, Vite, Axios, Recharts, Tailwind, Docker, Jenkins` | [Unusual-Login-Activity](https://github.com/abhishek14311431/Unusual-Login-Activity-Detection-in-University-IT-Systems) |
| 4 | **AI Investment Research Agent** | Multi-agent researcher validating companies via Tavily + Gemini then running 5 agents through LangGraph to output INVEST/PASS scores. | `Node.js, React, Tailwind, LangGraph.js, LangChain, Gemini 2.5 Flash, Tavily` | [AI-Investment-Research-Agent](https://github.com/abhishek14311431/AI-Investment-Research-Agent) |
| 5 | **AdaptiveMission — AI Rebuilds When Reality Changes** | Stateful mission planner understanding natural language and replanning multimodal routes from current location on real events. | `React, TypeScript, Vite, Node.js, Express, AI Orchestration` | [AdaptiveMission](https://github.com/abhishek14311431/Adaptive_mission--AI-ReBuilds-When-Reality-Changes) |

All 5 appear in **2D grid** (`src/data/projects.js`) and **3D Gallery** (`src/components/canvas/rooms/Gallery/GalleryRoom.jsx:37` `FALLBACK_PROJECTS` — related Unsplash `w=800` front textures).

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Core Framework** | React 19, React Router 7, Vite 8, `abhishek-portfolio` |
| **3D & Canvas** | Three.js 0.185, R3F 9.6, Drei 10.7, `@react-three/postprocessing` |
| **Animation** | GSAP 3.15, Vara.js, custom reveal shader |
| **Styling** | Sass 1.102, CSS Custom Properties (`Abhishek Identity` tokens) |
| **ML / Backend (projects)** | Python, FastAPI, Random Forest, Isolation Forest, K-Means/DBSCAN, Pandas, NumPy, LangGraph/Gemini, Node/Express |
| **State** | React Context (`AudioManager`, `PerformanceContext`, `SceneContext`, `AchievementsContext`) |
| **Assets** | Lucide React, hand-drawn WebP, Unsplash project photos |

---

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+ and npm
- Python 3.8+ (for running the 5 ML projects separately)

### 1. Clone

```bash
git clone https://github.com/abhishek14311431/Better_Version_Portfolio.git
cd Better_Version_Portfolio/sketch-portfolio
```

### 2. Install

```bash
npm install
```

### 3. Dev

```bash
npm run dev
# http://localhost:5173
```

### 4. Build

```bash
npm run build
npm run preview
```

---

## 📦 Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Vite dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve `dist/` |
| `npm run lint` | oxlint |

---

## ☁️ Deployment (Cloudflare Pages)

1. Push to `Better_Version_Portfolio` `main` (already configured to `origin`)
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git → `Better_Version_Portfolio`
3. Build: `Project Name: abhishek-portfolio`, `Branch: main`, `Framework: Vite`, `Build: npm run build`, `Output: dist`, `NODE_VERSION=20`
4. Or via Wrangler: `npx wrangler pages deploy dist --project-name=abhishek-portfolio`

Domain: configure `abhishek.dev` (see `index.html` and `public/sitemap.xml` already point to `https://abhishek.dev`).

---

## 📂 Project Structure

```text
Better_Version_Portfolio/sketch-portfolio/
├── dist/                  # Build output (abhishek-portfolio)
├── public/                # fonts, sounds, textures, sitemap (abhishek.dev)
├── src/
│   ├── components/canvas/ # Experience, HeroText (ABHISHEK), EntranceDoors (ML stickers), Gallery (5 ML cards)
│   ├── data/projects.js   # 5 ML projects (single-line READMEs, matched tech)
│   ├── hooks/useDocumentMeta.js # abhishek.dev meta
│   ├── sections/          # Hero (ABHISHEK), About, Projects, Contact (@abhishek.dev)
│   └── index.css          # Abhishek Identity tokens
├── index.html             # SEO abhishek.dev
└── package.json           # name: abhishek-portfolio
```

---

## 📄 License

MIT — see `LICENSE`.

---

<p align="center">
  Crafted with Abhishek ❤️ and ☕ — Creative ML Engineer • Python • Random Forest • React.js • LLM
</p>
