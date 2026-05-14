import { useState } from "react";
import { PALETTES, FONT_PAIRS } from "../data/constants";
import "./TweaksPanel.css";

export default function TweaksPanel({
  palette,
  setPalette,
  fontPair,
  setFontPair,
  depth,
  setDepth,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="tweaks-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle tweaks panel"
      >
        ⚙
      </button>

      {open && (
        <div className="tweaks-panel">
          <div className="tweaks-header">
            <b>Tweaks</b>
            <button
              className="tweaks-close"
              onClick={() => setOpen(false)}
              aria-label="Close tweaks"
            >
              ✕
            </button>
          </div>

          <div className="tweaks-body">
            {/* Palette */}
            <div className="tweaks-section-label">Palette</div>
            <div className="tweaks-palette-chips">
              {PALETTES.map((p, i) => {
                const isActive =
                  JSON.stringify(p) === JSON.stringify(palette);
                return (
                  <button
                    key={i}
                    className={`tweaks-chip ${isActive ? "active" : ""}`}
                    onClick={() => setPalette(p)}
                    aria-label={`Palette ${i + 1}`}
                    style={{ background: p[0] }}
                  >
                    <span className="tweaks-chip-accents">
                      {p.slice(1).map((c, j) => (
                        <i key={j} style={{ background: c }} />
                      ))}
                    </span>
                    {isActive && (
                      <svg
                        className="tweaks-check"
                        viewBox="0 0 14 14"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 7.2 5.8 10 11 4.2"
                          fill="none"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke="currentColor"
                        />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Typography */}
            <div className="tweaks-section-label">Typography</div>
            <select
              className="tweaks-select"
              value={fontPair}
              onChange={(e) => setFontPair(e.target.value)}
            >
              {Object.entries(FONT_PAIRS).map(([k, v]) => (
                <option key={k} value={k}>
                  {v.label}
                </option>
              ))}
            </select>

            {/* Depth */}
            <div className="tweaks-section-label">3D Depth</div>
            <input
              className="tweaks-slider"
              type="range"
              min="0"
              max="1.6"
              step="0.05"
              value={depth}
              onChange={(e) => setDepth(parseFloat(e.target.value))}
            />
            <div className="tweaks-slider-value">{depth.toFixed(2)}</div>
          </div>
        </div>
      )}
    </>
  );
}
