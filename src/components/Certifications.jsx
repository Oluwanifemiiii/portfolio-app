import { useRef } from "react";
import { Reveal } from "./Reveal";
import { CERTS } from "../data/constants";

function CertCard({ cert }) {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    const depth =
      parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--depth")
      ) || 1;
    el.style.transform = `perspective(900px) rotateY(${
      px * 8 * depth
    }deg) rotateX(${-py * 8 * depth}deg) translateZ(0)`;
    el.style.setProperty("--mx", `${(px + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(py + 0.5) * 100}%`);
  };

  const handleLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "";
  };

  return (
    <Reveal as="article" className="cert">
      <div
        ref={cardRef}
        className="cert-inner"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div>
          <div className="cert-num">№ {cert.num}</div>
          <h3 className="cert-title" style={{ whiteSpace: "pre-line" }}>
            {cert.title}
          </h3>
        </div>
        <div className="cert-foot">
          <div>
            <div className="cert-issuer">{cert.issuer}</div>
            <div className="cert-year">{cert.year}</div>
          </div>
          <div
            className="cert-badge"
            style={cert.badgeBg ? { background: cert.badgeBg } : {}}
          >
            {cert.badge}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Certifications() {
  return (
    <section id="certs" className="certs">
      <Reveal className="section-head">
        <span className="num">↳ 03</span>
        <span className="title">Certifications</span>
        <span className="meta">2 ACTIVE / VERIFIED</span>
      </Reveal>
      <div className="cert-grid">
        {CERTS.map((c) => (
          <CertCard key={c.num} cert={c} />
        ))}
      </div>
    </section>
  );
}
