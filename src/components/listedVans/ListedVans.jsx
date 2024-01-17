import React, { useEffect, useState } from "react";
import styles from "./ListedVans.module.scss";

import { Link } from "react-router-dom";

const ListedVans = () => {
  const [listedVans, setListedVans] = useState([]);
  useEffect(() => {
    fetch("/host/vans").then(res=>res.json()).then(data => setListedVans(data.vans))
  }, []);
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
