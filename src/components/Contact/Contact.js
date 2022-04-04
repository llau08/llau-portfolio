import gitHub from "../../assets/icons/github.svg";
import linkedIn from "../../assets/icons/linkedin.svg";
import "../Contact/Contact.scss";

function Contact() {
  return (
    <section id="contact">
      <h3 className="contact__title">Contact Me</h3>
      <p>
        <strong>e/m:</strong> lidalau.08@gmail.com
      </p>

      <h4 className="contact__title--blue">Stay Connected!</h4>
      <ul className="contact__list">
        <li className="contact__item">
          <a
            href="https://www.linkedin.com/in/lidalau/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedIn} alt="LinkedIn" />
          </a>
        </li>
        <li className="contact__item">
          <a
            href="https://github.com/llau08"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitHub} alt="GitHub" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
