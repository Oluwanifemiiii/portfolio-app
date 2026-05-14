import { useRef, useEffect } from "react";
import { PROJECTS } from "../data/constants";
import ProjectVisual from "./ProjectVisual";

export default function Projects() {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const barRef = useRef(null);
  const numRef = useRef(null);
  const currentRef = useRef(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    let maxScroll = 0;
    let targetX = 0;
    let rafId;

    const measure = () => {
      const trackW = track.scrollWidth;
      const viewW = window.innerWidth;
      // maxScroll = how far the track needs to translate so the last card is fully visible
      maxScroll = Math.max(0, trackW - viewW + 32);
      // Make the wrapper tall enough so sticky occupies that much scroll distance
      wrap.style.height = window.innerHeight + maxScroll + "px";
    };

    const computeTarget = () => {
      if (maxScroll === 0) return;
      const r = wrap.getBoundingClientRect();
      const distance = wrap.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-r.top, 0), distance);
      const p = distance > 0 ? scrolled / distance : 0;
      targetX = p * maxScroll;
    };

    const animate = () => {
      const clamped = Math.min(Math.max(targetX, 0), maxScroll);
      currentRef.current += (clamped - currentRef.current) * 0.1;

      // Snap to rest so it doesn't micro-jitter
      if (Math.abs(clamped - currentRef.current) < 0.05) {
        currentRef.current = clamped;
      }

      track.style.transform = `translate3d(${-currentRef.current}px, 0, 0)`;

      // Progress bar
      if (barRef.current && maxScroll > 0) {
        barRef.current.style.width =
          ((currentRef.current / maxScroll) * 100).toFixed(1) + "%";
      }

      // Card counter: which project card is closest to the centre of the viewport?
      if (numRef.current) {
        const cards = Array.from(track.children).filter(
          (c) => !c.classList.contains("end")
        );
        if (cards.length > 0) {
          const viewCX = window.innerWidth / 2;
          let closestIdx = 0;
          let closestDist = Infinity;
          cards.forEach((card, i) => {
            const cr = card.getBoundingClientRect();
            const dist = Math.abs(cr.left + cr.width / 2 - viewCX);
            if (dist < closestDist) {
              closestDist = dist;
              closestIdx = i;
            }
          });
          numRef.current.textContent = String(closestIdx + 1).padStart(2, "0");
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    const onResize = () => {
      measure();
      computeTarget();
    };

    measure();
    computeTarget();
    rafId = requestAnimationFrame(animate);

    window.addEventListener("scroll", computeTarget, { passive: true });
    window.addEventListener("resize", onResize);

    const t1 = setTimeout(onResize, 400);
    const t2 = setTimeout(onResize, 1200);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("scroll", computeTarget);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div id="projects" className="projects-wrap" ref={wrapRef}>
      <div className="projects">
        <div className="section-head">
          <span className="num">↳ 04</span>
          <span className="title">Selected projects</span>
          <span className="meta">04 / 04 — SCROLL</span>
        </div>

        <div className="projects-track" ref={trackRef}>
          {PROJECTS.map((p, i) => (
            <article key={i} className="project">
              <ProjectVisual vizClass={p.vizClass} />
              <div className="project-body">
                <div>
                  <div className="project-tag">{p.tag}</div>
                  <h3
                    className="project-name"
                    dangerouslySetInnerHTML={{ __html: p.name }}
                  />
                  <p className="project-desc">{p.desc}</p>
                </div>
                <div className="project-meta">
                  <dl>
                    <dt>Stack</dt>
                    <dd>{p.stack}</dd>
                    <dt>Role</dt>
                    <dd>{p.role}</dd>
                    <dt>Year</dt>
                    <dd>{p.year}</dd>
                  </dl>
                  <a
                    className="project-cta"
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                  >
                    Visit site <span className="arr" />
                  </a>
                </div>
              </div>
            </article>
          ))}

          <article className="project end">
            <h3>
              fin.
              <br />
              see them all?
            </h3>
            <a href="#projects" data-cursor="hover">
              All projects →
            </a>
          </article>
        </div>

        <div className="projects-progress">
          <span>
            <span className="num" ref={numRef}>
              01
            </span>{" "}
            /{" "}
            <span className="total">
              {String(PROJECTS.length).padStart(2, "0")}
            </span>
          </span>
          <span className="bar">
            <i ref={barRef} />
          </span>
          <span>← drag · scroll →</span>
        </div>
      </div>
    </div>
  );
}