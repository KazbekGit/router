import styles from "./Vans.module.scss";
import "../../../server";
import { useEffect, useState } from "react";

const Vans = () => {
  useEffect(() => {
    fetch("/api/vans")
      .then((resp) => resp.json())
      .then((data) => setVans(data.vans));
  }, []);

  const [vans, setVans] = useState([]);
  const vansTypes = ["Simple", "Luxury", "Rugged"];
  const vansElements = vans.map((van, index) => {
    console.log(van);
  });
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Explore our van options</h1>
      <div className={styles.navWrapper}>
        <ul className={styles.list}>
          {vansTypes.map((vanType, index) => {
            return <li key={index}>{vanType}</li>;
          })}
        </ul>
        <button className={styles.clear}>Clear filters</button>
      </div>
    </div>
  );
};

export default Vans;
