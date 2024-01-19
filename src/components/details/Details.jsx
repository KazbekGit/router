import styles from "./Details.module.scss";
import { useOutletContext } from "react-router-dom";

const Details = () => {
  const { van } = useOutletContext();

  return <div className={styles.wrapper}>{van.description}</div>;
};

export default Details;
