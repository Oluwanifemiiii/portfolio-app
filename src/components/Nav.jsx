import { useClock } from "../hooks";

export default function Nav() {
  const clock = useClock();

  return (
    <header className="nav">
      <div className="brand">
        <span className="dot" />
        <span>Oluwanifemi Ipaye</span>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#about" data-cursor="hover">About</a>
          </li>
          <li>
            <a href="#certs" data-cursor="hover">Certifications</a>
          </li>
          <li>
            <a href="#projects" data-cursor="hover">Projects</a>
          </li>
          <li>
            <a href="#contact" data-cursor="hover">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="clock">{clock}</div>
    </header>
  );
}
