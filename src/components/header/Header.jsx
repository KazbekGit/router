import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "/logo.svg";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link to="/">
          <img src={logo} alt="vans logo" width="145" height="41" />
        </Link>
        <nav>
          <ul className={styles.mainNav}>
            <li>
              <NavLink
                to="/host"
                end={true}
                className={({isActive}) => (isActive ? styles.active : null)}
              >
                Host
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({isActive}) => (isActive ? styles.active : null)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/vans"
                className={({isActive}) => (isActive ? styles.active : null)}
              >
                Vans
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
