import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.mainTitle}>
          You got the travel plans, we got the travel vans.
        </h1>
        <p className={styles.tagline}>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip. Find your van
        </p>
        <div className={styles.linkWrapper}>
          <Link to="/vans" className={styles.link}>
            Find your van
          </Link>
        </div>
      </div>
      <div className={styles.offers}>
        <p>
          Welcome to{" "}
          <Link to="/">
            <span className={styles.vanlife}>#vanlife</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Home;
