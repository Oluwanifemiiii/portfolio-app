import { useEffect } from "react";
import { useEndlessLoop } from "./hooks";
import { hexToRgba } from "./utils";

import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import DarkBand from "./components/DarkBand";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const PALETTE = ["#f1ebdd", "#181612", "#b85638", "#3c7a86", "#e8c870"];
const FONT = {
  display: '"Instrument Serif", "Times New Roman", serif',
  ui: '"Space Grotesk", ui-sans-serif, system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

export default function App() {
  useEndlessLoop();

  useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty("--bg", PALETTE[0]);
    r.setProperty("--fg", PALETTE[1]);
    r.setProperty("--cream", PALETTE[0]);
    r.setProperty("--ink", PALETTE[1]);
    r.setProperty("--accent-1", PALETTE[2]);
    r.setProperty("--accent-2", PALETTE[3]);
    r.setProperty("--accent-3", PALETTE[4]);
    r.setProperty("--rule", hexToRgba(PALETTE[1], 0.18));
    r.setProperty("--rule-strong", hexToRgba(PALETTE[1], 0.55));
    r.setProperty("--font-display", FONT.display);
    r.setProperty("--font-ui", FONT.ui);
    r.setProperty("--font-mono", FONT.mono);
    r.setProperty("--depth", "1");
  }, []);

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <DarkBand />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}