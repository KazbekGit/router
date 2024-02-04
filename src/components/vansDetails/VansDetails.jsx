import { useLoaderData, useLocation, Link } from "react-router-dom";
import styles from "./VansDetails.module.scss";
import { getVans } from "../../API";

async function loader({ params }) {
  console.log(params.id + "ds")
  return getVans(params.id);
}

/* async function loader() {
  const isLogged = true;
  if (isLogged === false) {
    const res = redirect("/login");
    res.body = true;
    return res;
  }
  return getVans();
} */

const VansDetails = () => {
  const van = useLoaderData();
  const vanTypeClasses = [styles.type, styles[`${van.type}`]];

  const { name, price, description, imageUrl, type } = van;
  const rentPeriod = "day";
  const location = useLocation();

  const search = location.state?.search || "";
  
  return (
    <div className={styles.wrapper}>
      <Link to={`..${search}`} relative="path">
        Back to Vans
      </Link>
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
export { loader };
