import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../../public/logo.svg";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link to="/">
          <img src={logo} alt="vans logo" width="145" height="41" />
        </Link>
        <nav>
          <ul className={styles.mainNav}>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/vans">
              <li>Vans</li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
