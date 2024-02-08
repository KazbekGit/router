import { useOutletContext } from "react-router-dom";
import styles from './Pricing.module.scss'

const Pricing = () => {
  const {van} = useOutletContext();

  return (
    <div className={styles.wrapper}>
      <span>new price</span>
      <b className={styles.price}>{van.price} $</b>
    </div>
  );
};

export default Pricing;
