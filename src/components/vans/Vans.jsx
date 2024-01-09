import styles from "./Vans.module.scss";
import "../../../server";
import { useEffect, useState } from "react";
import Van from "../van/Van";

const Vans = () => {
  useEffect(() => {
    fetch("/api/vans")
      .then((resp) => resp.json())
      .then((data) => setVans(data.vans));
  }, []);
    
  const [vans, setVans] = useState([]);
  const vansTypes = ["simple", "luxury", "rugged"];
  const vansItems = vans.map((van) => {
    console.log(van);
    return (
      <Van
        key={van.id}
        van={van}
      />
    );
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
      <ul className={styles.vansList}>{vansItems}</ul>
    </div>
  );
};

export default Vans;
