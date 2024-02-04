import { useLoaderData, redirect } from "react-router-dom";
import styles from "./ListedVans.module.scss";
import { getHostedVans } from "../../API";

import { Link } from "react-router-dom";

async function loader() {
  const isLogged = true
  if (isLogged === false) {
    const res = redirect("/login");
    res.body = true;
    return res;
  }
  return getHostedVans();
}

const ListedVans = () => {
  const listedVans = useLoaderData();
  return (
    <>
      <header className={styles.header}>
        <h1>Your listed vans</h1>
        <Link to="/allvans">view all</Link>
      </header>
      <ul className={styles.container}>
        {listedVans.map((van) => {
          return (
            <li className={styles.vanWrapper} key={van.id}>
              <Link to={`./${van.id}`}>
                <img src={van.imageUrl} alt="van avatar" width="68px" />
                <div className={styles.info}>
                  <h3>{van.name}</h3>
                  <p>{van.price}/day</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListedVans;
export { loader };
