import styles from "./SearchBox.module.scss";

export default function Searchbox({ placeholder, handleChange }) {
  return (
    <div className={styles["search-container"]}>
      <input
        className={styles.search}
        onChange={handleChange}
        type="search"
        placeholder={placeholder}
      />
    </div>
  );
}
