import { useRef, useEffect } from "react";
import { Reveal } from "./Reveal";
import { CHIPS } from "../data/constants";

export default function About() {
  const stickersRef = useRef([]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const depth =
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue("--depth")
        ) || 1;
      stickersRef.current.forEach((s, i) => {
        if (!s) return;
        const anchor = parseInt(s.dataset.anchor) || 1200;
        const dir = i % 2 === 0 ? 1 : -1;
        s.style.transform = `translateY(${
          (y - anchor) * 0.05 * dir * depth
        }px) rotate(${s.dataset.rot || "-6deg"})`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="about" className="about">
      <div className="stickers">
        <div
          ref={(el) => (stickersRef.current[0] = el)}
          className="sticker"
          data-anchor="1300"
          data-rot="-6deg"
          style={{ top: "30%", right: "8%" }}
        >
          debugging…
        </div>
        <div
          ref={(el) => (stickersRef.current[1] = el)}
          className="sticker s2"
          data-anchor="1500"
          data-rot="4deg"
          style={{ top: "50%", right: "11%" }}
        >
          locking in.
        </div>
        <div
          ref={(el) => (stickersRef.current[2] = el)}
          className="sticker s3"
          data-anchor="1400"
          data-rot="-3deg"
          style={{ top: "78%", right: "12%" }}
        >
          ship it.
        </div>
      </div>

      <Reveal className="section-head">
        <span className="num">↳ 02</span>
        <span className="title">About</span>
        <span className="meta">EST. LAGOS / 24-7 ONLINE</span>
      </Reveal>

      <div className="about-grid">
        <Reveal as="h2" className="about-lead">
          Building things on <em>both ends</em>,{" "}
          <span className="alt">end to end —</span> from <em>UI</em> to{" "}
          <span className="alt">infra</span>.
        </Reveal>

        <Reveal className="about-body">
          <p>
            I'm a fullstack developer who actually enjoys the messy parts —
            hopping on a fresh project, untangling a stubborn bug, and locking
            in until it's solved. I write things that work, then make them feel
            good.
          </p>
          <p>
            I'm an aspiring cloud engineer with my hands on Oracle Cloud
            Infrastructure and Google Cloud Security. Lately I've been shipping
            React + Node products for clients in fashion, aviation, events and
            hospitality.
          </p>
          <div className="about-stack">
            {CHIPS.map((c) => (
              <span key={c} className="chip">
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="count-badge">02 — About</div>
    </section>
  );
}
