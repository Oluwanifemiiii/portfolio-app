import { TECHS } from "../data/constants";

export default function Marquee() {
  // Duplicate for seamless infinite scroll
  const items = [...TECHS, ...TECHS];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {items.map((tech, i) => (
          <span key={i}>
            {tech} <span className="star" />
          </span>
        ))}
      </div>
    </div>
  );
}
