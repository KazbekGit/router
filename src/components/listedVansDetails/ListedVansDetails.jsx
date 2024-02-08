import styles from "./ListedVansDetails.module.scss";
import { NavLink, Link, Outlet, useLoaderData } from "react-router-dom";
import { getHostedVans } from "../../API";
import { isAuth } from "../utils";

async function loader({ params }) {
  await isAuth();
  return getHostedVans(params.id);
}

const ListedVansDetails = () => {
  const van = useLoaderData();

  return (
    <div className={styles.wrapper}>
      <Link to=".." relative="path">
        Back to all vans...
      </Link>
      <header className={styles.header}>
        <img src={van.imageUrl} alt="van avatar" width="160px" />
        <div className={styles.info}>
          <h3>{van.name}</h3>
          <p>{van.price}$/day</p>
        </div>
      </header>
      <ul className={styles.linkList}>
        <li>
          <NavLink
            to={`.`}
            end
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            details
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`pricing`}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`photos`}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            photos
          </NavLink>
        </li>
      </ul>
      <Outlet context={{ van }} />
    </div>
  );
};

export default ListedVansDetails;
export { loader };
