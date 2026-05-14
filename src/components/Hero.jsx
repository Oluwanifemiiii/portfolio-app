import { useRef, useEffect } from "react";
import { SplitLine } from "./Reveal";

export default function Hero() {
  const titleRef = useRef(null);
  const heroRef = useRef(null);
  const stageRef = useRef(null);

  /* Parallax on scroll */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (titleRef.current && y < window.innerHeight) {
        titleRef.current.style.transform = `translateY(${y * -0.12}px)`;
        titleRef.current.style.opacity = String(
          Math.max(0, 1 - y / window.innerHeight)
        );
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Mouse-parallax on 3D scene */
  useEffect(() => {
    const hero = heroRef.current;
    const stage = stageRef.current;
    if (!hero || !stage) return;
    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      stage.style.setProperty("--mx", `${px * 30}deg`);
      stage.style.setProperty("--my", `${py * 30}deg`);
    };
    hero.addEventListener("mousemove", onMove);
    return () => hero.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-meta">
        
        <div className="meta-r">
          <span>Fullstack &amp; cloud</span>
          <span>Available for commissions</span>
        </div>
      </div>

      <h1 className="hero-title" ref={titleRef}>
        <SplitLine>
          <i>OLUWANIFEMI</i>
        </SplitLine>
        <SplitLine>
          <i className="ital">
            Ipaye
            <sup
              style={{
                fontSize: "0.30em",
                verticalAlign: "super",
                color: "var(--fg)",
                fontStyle: "normal",
                marginLeft: "0.2em",
                letterSpacing: "0",
              }}
            >
              ★
            </sup>
          </i>
        </SplitLine>
      </h1>

      {/* 3D scene */}
      <div className="scene" aria-hidden="true">
        <div className="stage" ref={stageRef}>
          <div className="cube">
            <div className="face front" />
            <div className="face back" />
            <div className="face right" />
            <div className="face left" />
            <div className="face top" />
            <div className="face bottom" />
          </div>
          <div className="disc" />
          <div className="disc b" />
          <div className="disc c" />
        </div>
      </div>

      <div className="hero-row">
        <p className="hero-tag">
          A fullstack developer who likes hopping on projects, debugging until{" "}
          <em>whenever</em>, and shipping things that work. Aspiring cloud
          engineer. Based in Lagos.
        </p>
        <div className="hero-scroll-cue">
          <span>Scroll</span>
          <span className="arrow" />
        </div>
      </div>
    </section>
  );
}
