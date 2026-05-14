export function hexToRgba(hex, a) {
  if (!hex) return `rgba(0,0,0,${a})`;
  const s = hex.replace("#", "");
  const n =
    s.length === 3
      ? s.split("").map((c) => parseInt(c + c, 16))
      : [
          parseInt(s.slice(0, 2), 16),
          parseInt(s.slice(2, 4), 16),
          parseInt(s.slice(4, 6), 16),
        ];
  return `rgba(${n[0]},${n[1]},${n[2]},${a})`;
}
