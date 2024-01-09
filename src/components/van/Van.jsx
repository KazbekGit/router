import styles from "./Van.module.scss";

const Van = ({ van, vanTypeIndex }) => {
  const { description, hostId, id, imageUrl, name, price, type } = van;
  const vanTypeClasses = [styles.type, styles[`${type}`]];

  const rentPeriod = "day"
  return (
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
      <button className={vanTypeClasses.join(" ")}>{type} { vanTypeIndex}</button>
    </div>
  );
};

export default Van;
