export default function ProjectVisual({ vizClass }) {
  if (vizClass === "viz-rewa") {
    return (
      <div className={`project-visual ${vizClass}`}>
        <div className="layers">
          <div className="layer l1" />
          <div className="layer l2" />
          <div className="layer l3" />
        </div>
      </div>
    );
  }

  if (vizClass === "viz-lux") {
    return (
      <div className={`project-visual ${vizClass}`}>
        <div className="layers">
          <div className="layer l1" />
          <div className="layer l2" />
          <div className="plane" />
        </div>
      </div>
    );
  }

  if (vizClass === "viz-honey") {
    return (
      <div className={`project-visual ${vizClass}`}>
        <div className="layers">
          <div className="layer l1" />
          <div className="layer l2" />
          <div className="layer l3" />
        </div>
      </div>
    );
  }

  if (vizClass === "viz-regnum") {
    return (
      <div className={`project-visual ${vizClass}`}>
        <div className="layers">
          <div className="layer l1" />
          <div className="layer l2" />
          <div className="layer l3" />
          <div className="layer l4" />
        </div>
      </div>
    );
  }

  return null;
}
