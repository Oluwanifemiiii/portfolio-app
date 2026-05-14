import { useState, useEffect, useRef } from "react";

/* ─── Reveal on scroll via IntersectionObserver ─── */
export function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, visible];
}

/* ─── Lagos live clock ─── */
export function useClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const lagos = new Date(utc + 3600000);
      const hh = String(lagos.getHours()).padStart(2, "0");
      const mm = String(lagos.getMinutes()).padStart(2, "0");
      const ss = String(lagos.getSeconds()).padStart(2, "0");
      setTime(`Lagos — ${hh}:${mm}:${ss}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

/* ─── No-op: native scroll is used instead ─── */
export function useEndlessLoop() {}