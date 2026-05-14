import { useRef, useState, useEffect } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };
    window.addEventListener("mousemove", onMove);

    let raf;
    const tick = () => {
      const p = pos.current;
      p.rx += (p.mx - p.rx) * 0.18;
      p.ry += (p.my - p.ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${p.rx}px, ${p.ry}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    const onEnter = () => setHover(true);
    const onLeave = () => setHover(false);

    const bindHoverTargets = () => {
      const els = document.querySelectorAll('a, button, [data-cursor="hover"]');
      els.forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
      return els;
    };

    // Bind initially + rebind after DOM settles (for cloned project cards, etc.)
    let els = bindHoverTargets();
    const rebindTimer = setTimeout(() => {
      els.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      els = bindHoverTargets();
    }, 2000);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      clearTimeout(rebindTimer);
      els.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div
        ref={ringRef}
        className={`cursor-ring ${hover ? "is-hover" : ""}`}
      />
    </>
  );
}
