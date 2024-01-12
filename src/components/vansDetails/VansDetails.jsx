import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./VansDetails.module.scss";

const VansDetails = () => {
  const params = useParams();
  const [van, setVan] = useState({});
  const vanTypeClasses = [styles.type, styles[`${van.type}`]];

  useEffect(() => {
    fetch(`/vans/${params.id}`)
      .then((response) => response.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  const { id, name, price, description, imageUrl, type } = van;
  const rentPeriod = "day";
  return (
    <div className={styles.wrapper}>
    <Link to="/vans">Back to Vans</Link>
      <img
        className={styles.mainImg}
        src={imageUrl}
        alt="van image"
        width="490px"
      />
      <span className={styles.name}>{name}</span>
      <div>
        <span className={styles.title}>${price}</span>
        <span className={styles.extraInfo}>/{rentPeriod}</span>
      </div>
      <button className={vanTypeClasses.join(" ")}>{type}</button>
      <p>{description}</p>
    </div>
  );
};

export default VansDetails;
