export const projects = [
  {
    id: "ai-driven-construction-cost-estimation",
    title: "AI-Driven Construction Cost Estimation",
    category: "Full Stack + ML / Random Forest",
    shortDescription: "AI platform estimating construction costs across 6 project types with Random Forest valuations and PDF reports via FastAPI + React.",
    tags: ["Python", "Random Forest", "FastAPI", "React", "Vite"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      overview: "AI platform estimating construction costs across 6 project types with dynamic market-aware calculations and PDF reports via FastAPI + React.",
      challenge: "Unify real-time market data and estimation engines while keeping decoupled Render and Vercel deploys without drift.",
      approach: "Structured FastAPI backend with SQLAlchemy/SQLite/Pydantic and Vite React frontend with reportlab PDF generation.",
      solution: "Delivered multi-project estimation with smart upgrade tiers under /api/v1 and environment-driven deploys.",
      technologies: ["Python", "FastAPI", "SQLAlchemy", "SQLite", "Pydantic", "Uvicorn", "ReportLab", "React 19", "Vite 7", "Random Forest"],
      keyFeatures: [
        "6 construction typologies with Classic/Premium/Elite upgrades",
        "Dynamic market-aware cost calculation",
        "PDF report generation and project archives",
        "Exterior/interior dataset workflows",
        "Separate Render and Vercel pipelines"
      ],
      performance: "FastAPI cold start under 1.2s, Vite build under 1.8s, separate deploys.",
      outcome: "Live at ai-driven-construction-cost-estimat.vercel.app with 138 commits.",
      results: "Accurate real-time valuations for architects and builders."
    }
  },
  {
    id: "ai-driven-continuous-behavioral-authentication",
    title: "AI-Driven Continuous Behavioral Authentication",
    category: "ML Security / Isolation Forest + Pandas & NumPy",
    shortDescription: "Zero-trust system verifying cursor and keystroke behavior every 2s with Isolation Forest to lock on impostors with 0% FAR.",
    tags: ["Python", "Isolation Forest", "Pandas", "NumPy", "Scikit-learn", "pynput"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      overview: "Zero-trust system verifying cursor and keystroke behavior every 2s with Isolation Forest to lock on impostors.",
      challenge: "Verify continuously without impostor training data and without false alarms from noisy events.",
      approach: "Engineered 21-feature fusion with StandardScaler and one-class Isolation Forest plus threshold logic ALLOW/MONITOR/LOCK.",
      solution: "Background threading service with cross-platform lock and Gmail SMTP retry queue for reliable alerts.",
      technologies: ["Python 3.8+", "Scikit-learn Isolation Forest", "Pandas", "NumPy", "pynput", "StandardScaler", "PyYAML", "smtplib", "Quartz/Win32API/Xlib"],
      keyFeatures: [
        "21 features at 100Hz cursor and keystroke sampling",
        "One-class Isolation Forest with no impostor data needed",
        "Threshold logic with immediate lock and email alerts",
        "Adaptive retraining on confidence ≥0.85 sessions",
        "70 owner + 30 impostor reproducible evaluation"
      ],
      performance: "95.71% owner recognition, 100% impostor detection, FAR 0%, 2.06s average detection.",
      outcome: "Run via python main.py --mode evaluate/service with queued alerts.",
      results: "Verified on behavior_features_sample.csv with 97% combined accuracy."
    }
  },
  {
    id: "uniguard-unusual-login-activity-detection",
    title: "UniGuard — Unusual Login Activity Detection",
    category: "Unsupervised ML + Full Stack & DevOps",
    shortDescription: "Unsupervised K-Means & DBSCAN detector scoring unusual university logins with FastAPI + React dashboard and Docker/Jenkins.",
    tags: ["Python", "K-Means", "DBSCAN", "Pandas", "FastAPI", "React", "Docker", "Jenkins"],
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      overview: "Unsupervised K-Means & DBSCAN detector scoring unusual university logins with FastAPI + React dashboard.",
      challenge: "Detect anomalies without labeled fraud data and provide operable Docker demo with explainable risk scoring.",
      approach: "Preprocessed CSV logs with Pandas and clustered with K-Means & DBSCAN via Joblib with FastAPI and Recharts dashboard.",
      solution: "Python/FastAPI/Pandas/Joblib backend and React/Vite/Axios/Recharts frontend containerized with Docker Compose and Jenkins.",
      technologies: ["Python", "FastAPI", "Pandas", "Joblib", "Scikit-learn K-Means DBSCAN", "React", "Vite", "Axios", "Recharts", "Tailwind", "Docker", "Jenkins", "Docker Compose"],
      keyFeatures: [
        "K-Means & DBSCAN anomaly detection on login logs",
        "FastAPI risk scoring with CSV upload",
        "React dashboard with Recharts visualization",
        "Docker Compose one-command deployment",
        "Jenkins pipeline with smoke tests"
      ],
      performance: "Demo boots in under 25s, Vite HMR under 400ms, hot reload via uvicorn.",
      outcome: "Live at unusual-login-activity-detection-in.vercel.app with DEVOPS_IMPLEMENTATION.md.",
      results: "22 commits with dummy_demo_log.csv and notebook pipeline."
    }
  },
  {
    id: "ai-investment-research-agent",
    title: "AI Investment Research Agent",
    category: "Agentic AI / LLM + LangGraph & Gemini",
    shortDescription: "Multi-agent researcher validating companies via Tavily + Gemini then running 5 agents through LangGraph to output INVEST/PASS scores.",
    tags: ["Node.js", "React", "LangGraph.js", "Gemini", "Tavily", "LLM Agents"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      overview: "Multi-agent researcher validating companies via Tavily + Gemini then running 5 agents through LangGraph to output INVEST/PASS scores.",
      challenge: "Prevent hallucinations for fake companies and reduce token cost versus single massive prompt.",
      approach: "Built native Node.js http server with LangGraph StateGraph Validate→Research→Financial→News→Competition→Decision.",
      solution: "React + Tailwind dashboard with glassmorphic report and deterministic 0–100 scoring threshold.",
      technologies: ["Node.js", "React", "Tailwind CSS", "LangGraph.js", "LangChain", "Google Gemini 2.5 Flash", "Tavily Search API"],
      keyFeatures: [
        "LangGraph pipeline with 5 isolated agents",
        "Two-stage Tavily + Gemini validation for FakeCompanyXYZ",
        "Typed Annotation.Root state with reducers",
        "Deterministic 0–100 INVEST/PASS scoring",
        "Structured AppError handling with logStep"
      ],
      performance: "15–20s single POST with predictable token cost via sequential state passing.",
      outcome: "MRF 69 PASS vs JIO 78 INVEST at ai-product-development-engineer-int.vercel.app.",
      results: "Validated fake rejection and glassmorphic scorecard rendering."
    }
  },
  {
    id: "adaptivemission-ai-rebuilds-when-reality-changes",
    title: "AdaptiveMission — AI Rebuilds When Reality Changes",
    category: "Agentic AI + Full Stack / React, Node, Express",
    shortDescription: "Stateful mission planner understanding natural language and replanning multimodal routes from current location on real-world events.",
    tags: ["React", "TypeScript", "Vite", "Node.js", "Express", "AI Agents"],
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      overview: "Stateful mission planner understanding natural language and replanning multimodal routes from current location on real events.",
      challenge: "Static routes invalidate mid-execution due to delays and unavailability requiring current-location replanning.",
      approach: "Layered React+Vite frontend and Node+Express backend with Monitor→Planner→Tools→Validator→Executor workflow.",
      solution: "Natural-language to structured state with candidate generation, validation and Gmail approval workflow.",
      technologies: ["React", "TypeScript", "Vite", "Node.js", "Express", "TypeScript", "AI Orchestration", "Stateful Agents"],
      keyFeatures: [
        "Natural-language mission understanding",
        "Dynamic candidate route generation",
        "Monitor/Planner/Validator/Executor with replanning loop",
        "Current-location replanning with human approval",
        "Revision history and constraint validation"
      ],
      performance: "Stateful continuity across legs with rapid replanning and automated tests.",
      outcome: "Live at adaptive-mission-ai-re-builds-when.vercel.app with 10 commits.",
      results: "Demo HR team LPU→Delhi University 4 members ₹25k before 10 AM."
    }
  }
];
