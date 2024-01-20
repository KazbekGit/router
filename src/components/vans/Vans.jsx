import styles from "./Vans.module.scss";
import "../../../server";
import { useEffect, useState } from "react";
import Van from "../van/Van";
import { useSearchParams } from "react-router-dom";

const Vans = () => {
  useEffect(() => {
    fetch("/vans")
      .then((resp) => resp.json())
      .then((data) => setVans(data.vans));
  }, []);

  const [searchParams, setSearchParams] = useSearchParams({ type: "" });

  const [vans, setVans] = useState(null);
  if (!vans) return <p>Loading data...</p>;

  const handleFilterParams = (key, value) => {
    setSearchParams((prev) => {
      if (value === null) {
        prev.delete(key);
      } else {
        prev.set(key, value);
      }
      return prev
    });
  };

  const typeFilter = searchParams.get("type");
  const filteredVans = typeFilter
    ? vans.filter((van) => {
        return van.type.toLowerCase() === typeFilter;
      })
    : vans;

  const vansTypes = ["simple", "luxury", "rugged"];
  const vansItems = filteredVans.map((van) => {
    return <Van key={van.id} van={van} />;
  });
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Explore our van options</h1>
      <div className={styles.navWrapper}>
        <ul className={styles.list}>
          {vansTypes.map((vanType, index) => {
            return (
              <li key={index} onClick={() => handleFilterParams("type", vanType)}>
                {vanType}
              </li>
            );
          })}
        </ul>
        <button
          className={styles.clear}
          onClick={() => handleFilterParams("type", null)}
        >
          Clear filters
        </button>
      </div>
      <ul className={styles.vansList}>{vansItems}</ul>
    </div>
  );
};

export default Vans;
