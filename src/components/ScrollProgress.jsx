import { useRef, useEffect } from "react";

export default function ScrollProgress() {
  const ref = useRef(null);

  useEffect(() => {
    const update = () => {
      if (!ref.current) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      ref.current.style.width =
        (max > 0 ? (window.scrollY / max) * 100 : 0).toFixed(2) + "%";
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="progress">
      <span ref={ref} />
    </div>
  );
}
