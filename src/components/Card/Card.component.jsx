import styles from "./Card.module.scss";

export default function Card(props) {
  return (
    <div className={styles["card-container"]}>
      <img src={`https://robohash.org/${props.monster.id}`} alt="" />
      <h1>{props.monster.name}</h1>
      <p>{props.monster.email}</p>
    </div>
  );
}
