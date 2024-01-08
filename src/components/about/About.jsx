import styles from "./About.module.scss";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <picture>
        <source srcSet="/img/about/aboutImg.jpg 1x, /img/about/aboutImg@2x.jpg 2x" />
        <img
          src="/img/about/aboutImg.jpg"
          alt="man on vans watching stars"
          width="549px"
          height="233px"
        />
      </picture>
      <div className={styles.wrapper}>
        <h1 className={styles.mainTitle}>
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className={styles.tagline}>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch.
          <br /> (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>

        <div className={styles.linkWrapper}>
          <p>Your destination is waiting.</p>
          <p>Your van is ready.</p>
          <Link to="/vans" className={styles.link}>
            Explore our vans
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
