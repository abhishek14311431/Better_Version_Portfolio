import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const highlightCards = [
  {
    title: "AI & ML Engineering",
    desc: "LangChain.js, LangGraph.js, Regression, Classification, Model Evaluation and Anomaly Detection with Isolation Forest, K-Means, DBSCAN and Random Forest."
  },
  {
    title: "Programming",
    desc: "Python and JavaScript for scalable AI systems, data pipelines and interactive web products."
  },
  {
    title: "Libraries & Frameworks",
    desc: "FastAPI, Flask, React, Scikit-learn, NumPy, Pandas, Matplotlib and Streamlit for end-to-end ML workflows."
  },
  {
    title: "Databases & Tools",
    desc: "MySQL, SQLite, Git/GitHub, VS Code, Vercel and Render for storage, version control and deployment."
  },
  {
    title: "Hybrid AI Cost Intelligence",
    desc: "Built rule-based + Random Forest system at Mantha Architects automating cost calculations and site expenditure tracking."
  },
  {
    title: "Behavioral Biometrics",
    desc: "Engineered 100Hz multi-threaded Isolation Forest pipeline with 92–94% owner accuracy and real-time email alerts."
  }
];

const stats = [
  { value: "7.21", label: "CGPA — B.Tech AI & ML, LPU" },
  { value: "89.4%", label: "12th — Expert PU College" },
  { value: "83.8%", label: "10th — Jain Public School" },
  { value: "60+", label: "Hours Hands-on AI/ML" },
  { value: "5", label: "Flagship AI Projects" }
];

export default function About() {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const cardsRef = useRef([]);
  const statsRef = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Fade in left column on scroll
    gsap.fromTo(leftColRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: leftColRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Fade in highlight cards sequentially
    gsap.fromTo(cardsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Fade in stats counter cards
    gsap.fromTo(statsRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.06,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 50%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        backgroundColor: 'var(--background-secondary)',
        borderTop: '1px solid var(--border-primary)',
        borderBottom: '1px solid var(--border-primary)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Main Grid: Biography & Highlight Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '60px',
            marginBottom: '70px'
          }}
          className="about-grid"
        >
          {/* Left Column - Biography & Mission */}
          <div
            ref={leftColRef}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              textAlign: 'left'
            }}
          >
            {/* 1. Small section label */}
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--accent-primary)',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}
            >
              ABOUT Abhishek S // CREATIVE ML ENGINEER
            </p>

            {/* 2. Large heading */}
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
                lineHeight: 1.12,
                fontWeight: 500,
                marginBottom: '28px'
              }}
            >
              Building Intelligent AI Systems.<br />
              <span className="text-gradient-purple">Where Data, Models, and Real-World Impact Become One.</span>
            </h2>

            {/* 3. Premium Paragraphs */}
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: '20px',
                fontWeight: 300
              }}
            >
              I am Abhishek S, a B.Tech AI & ML student at Lovely Professional University (CGPA 7.21) and Creative ML Engineer based in India. I build intelligent systems that turn raw interaction data into reliable decisions — from Random Forest cost estimation to Isolation Forest behavioral authentication.
            </p>
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: '20px',
                fontWeight: 300
              }}
            >
              My stack spans Python, JavaScript, LangChain.js/LangGraph.js, FastAPI, Flask, React, Scikit-learn, NumPy, Pandas, Matplotlib and Streamlit, backed by MySQL/SQLite and deployed on Vercel/Render. At Mantha Architects (Jun–Sep 2025) I engineered a hybrid rule-based + Random Forest cost system automating interior/exterior/structural workflows as Site Engineer Intern.
            </p>
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: '36px',
                fontWeight: 300
              }}
            >
              With 60+ hours of hands-on AI/ML, Oracle Data Platform & AI Foundations certifications, and flagship projects like behavioral biometrics (92–94% accuracy, 4–5% FRR), I bridge model research and product engineering with ownership, debugging and cross-functional collaboration.
            </p>

            {/* 4. Personal Mission Statement */}
            <div
              className="glass-panel"
              style={{
                padding: '24px 28px',
                borderLeft: '4px solid var(--accent-primary)',
                backgroundColor: 'rgba(16, 16, 16, 0.6)',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <span
                style={{
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--accent-secondary)',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  display: 'block',
                  marginBottom: '8px'
                }}
              >
                MISSION STATEMENT
              </span>
              <p
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.65,
                  color: 'var(--text-primary)',
                  fontStyle: 'italic',
                  margin: 0,
                  fontWeight: 400
                }}
              >
                "My goal is to create digital experiences that are visually stunning, technically robust, and memorable. Every project should combine beautiful design, smooth interactions, scalable architecture, and exceptional user experience."
              </p>
            </div>
          </div>

          {/* Right Column - 5. Highlight Cards (6) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                margin: 0,
                textAlign: 'left',
                borderBottom: '1px solid var(--border-primary)',
                paddingBottom: '12px'
              }}
            >
              Core Capabilities & Focus
            </h3>
            
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '20px',
              }}
            >
              {highlightCards.map((card, idx) => (
                <div
                  key={card.title}
                  ref={el => cardsRef.current[idx] = el}
                  className="glass-panel capability-card"
                  style={{
                    padding: '24px',
                    textAlign: 'left',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <h4
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: 500,
                        color: 'var(--text-primary)',
                        marginBottom: '8px'
                      }}
                    >
                      {card.title}
                    </h4>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.55,
                        margin: 0,
                        fontWeight: 300
                      }}
                    >
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6. Statistics Section */}
        <div
          style={{
            borderTop: '1px solid var(--border-primary)',
            borderBottom: '1px solid var(--border-primary)',
            padding: '40px 0',
            marginBottom: '50px'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
              gap: '24px',
              textAlign: 'center'
            }}
          >
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                ref={el => statsRef.current[idx] = el}
                className="glass-panel"
                style={{
                  padding: '20px 16px',
                  backgroundColor: 'rgba(16, 16, 16, 0.4)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <span
                  style={{
                    fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    color: 'var(--accent-primary)',
                    letterSpacing: '-0.5px'
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Skills Summary & 8. Closing Statement */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '16px',
            maxWidth: '800px',
            margin: '0 auto'
          }}
        >
          {/* Skills Summary Tag */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {['Python', 'JavaScript', 'LangChain.js', 'LangGraph.js', 'Regression', 'Classification', 'Anomaly Detection', 'Scikit-learn', 'NumPy', 'Pandas', 'FastAPI', 'Flask', 'React', 'MySQL', 'SQLite'].map(skill => (
              <span
                key={skill}
                style={{
                  fontSize: '0.82rem',
                  padding: '6px 14px',
                  backgroundColor: 'rgba(0, 217, 255, 0.08)',
                  border: '1px solid var(--border-primary)',
                  borderRadius: 'var(--radius-full)',
                  color: 'var(--accent-secondary)',
                  fontWeight: 500
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Closing Statement */}
          <p
            style={{
              fontSize: '1.25rem',
              fontFamily: 'var(--font-heading)',
              color: 'var(--text-primary)',
              fontWeight: 500,
              marginTop: '10px',
              letterSpacing: '0.5px'
            }}
          >
            "I don't just train models — I turn them into reliable products users trust."
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 0.95fr 1.05fr !important;
          }
        }
        .capability-card {
          border-left: 3px solid var(--border-primary) !important;
        }
        .capability-card:hover {
          border-left-color: var(--accent-primary) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
