import logo from "../../assets/logos/name-logo.png";
import "../Hero/Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <img src={logo} className="hero__img" alt="Lida Lau" />
      <h1>Web Developer</h1>
      <h2>Located in Vancouver, BC</h2>
    </section>
  );
}

export default Hero;
