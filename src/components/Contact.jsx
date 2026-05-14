import { Reveal } from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <Reveal className="section-head">
        <span className="num">↳ 05</span>
        <span className="title">Contact</span>
        <span className="meta">REPLIES &lt; 24H</span>
      </Reveal>

      <Reveal as="h2" className="contact-headline">
        Let's <em>build</em>
        <br />
        <span className="alt">something</span> together.
      </Reveal>

      <Reveal>
        <a
          className="contact-email"
          href="mailto:ipayewill@gmail.com"
          data-cursor="hover"
        >
          ipayewill@gmail.com →
        </a>
      </Reveal>

      <div className="contact-grid">
        <Reveal className="col">
          <h4>Direct</h4>
          <a href="mailto:ipayewill@gmail.com" data-cursor="hover">
            ipayewill@gmail.com
          </a>
        </Reveal>
        <Reveal className="col">
          <h4>Code</h4>
          <a
            href="https://github.com/Oluwanifemiiii/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
          >
            github.com/Oluwanifemiiii
          </a>
        </Reveal>
        <Reveal className="col">
          <h4>Network</h4>
          <a
            href="https://www.linkedin.com/in/oluwanifemi-ipaye-981396281/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
          >
            linkedin.com/in/oluwanifemi-ipaye
          </a>
        </Reveal>
      </div>
    </section>
  );
}
