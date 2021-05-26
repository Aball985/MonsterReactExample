import styles from "./CardList.module.scss";
import Card from "../Card/Card.component";

export default function CardList(props) {
  return (
    <div className={styles["card-list"]}>
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
}
