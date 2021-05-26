import styles from "./Card.module.scss";
export default function Card(props) {
  return (
    <div className={styles["card-container"]}>
      <img src={`https://robohash.org/${props.monster.id}`} alt="" />
      <h1 className={styles["monster-name"]}>{props.monster.name}</h1>
      <p className={styles["monster-email"]}>{props.monster.email}</p>
    </div>
  );
}
