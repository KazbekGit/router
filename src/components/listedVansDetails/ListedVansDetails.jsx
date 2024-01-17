import React, { useEffect, useState } from "react";
import styles from "./ListedVansDetails.module.scss";
import { useParams, NavLink, Link } from "react-router-dom";

const ListedVansDetails = () => {
  const params = useParams();

  const [van, setVan] = useState(null);

  
  useEffect(() => {
    fetch(`/vans/${params.id}`)
    .then((response) => response.json())
    .then((data) => setVan(data.vans));
  }, [params.id]);
  
  if (!van) {
    return <p>Loading data...</p>;
  }
  
  return (
    <div className={styles.wrapper}>
    <Link to="../">Back to all vans...</Link>
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
            to={`./details`}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            details
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`./pricing`}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`./photos`}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            photos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ListedVansDetails;
