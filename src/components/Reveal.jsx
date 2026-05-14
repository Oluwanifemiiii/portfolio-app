import { useReveal } from "../hooks";

export function Reveal({ children, className = "", style, as: Tag = "div" }) {
  const [ref, vis] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${vis ? "in" : ""} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}

export function SplitLine({ children }) {
  const [ref, vis] = useReveal();
  return (
    <span className="line" ref={ref}>
      <span className={`split-line ${vis ? "in" : ""}`}>
        <i>{children}</i>
      </span>
    </span>
  );
}
