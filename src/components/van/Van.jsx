import { useEffect } from "react";
import styles from "./Van.module.scss";
import { Link } from "react-router-dom";

const Van = ({ van, state }) => {
  const { description, hostId, id, imageUrl, name, price, type } = van;
  const rentPeriod = "day";
  const vanTypeClasses = [styles.type, styles[`${type}`]];
  return (
    <Link to={van.id} state={state}>
      <div className={styles.wrapper}>
        <img
          className={styles.mainImg}
          src={imageUrl}
          alt="van image"
          width="230px"
        />
        <div className={styles.itemInfo}>
          <span className={styles.name}>{name}</span>
          <span>${price}</span>
          <span className={styles.extraInfo}>/{rentPeriod}</span>
        </div>
        <button className={vanTypeClasses.join(" ")}>{type}</button>
      </div>
    </Link>
  );
};

export default Van;
