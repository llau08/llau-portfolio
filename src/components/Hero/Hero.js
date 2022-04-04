import logo from "../../assets/logos/name-logo.png";
import "../Hero/Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <img src={logo} className="hero__img" alt="Lida Lau" />
      <h1 className="hero__title">Web Developer</h1>
      <h2 className="hero__title--btm">Vancouver, BC</h2>
    </section>
  );
}

export default Hero;
