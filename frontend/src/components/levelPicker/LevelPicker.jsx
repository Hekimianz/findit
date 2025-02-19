import styles from "./LevelPicker.module.css";

function LevelPicker({ name, level, id }) {
  return (
    <div className={styles.level__card}>
      <img src={`/levels/level${level}.jpeg`} alt="level" />
      <h2>{name}</h2>
    </div>
  );
}

export default LevelPicker;
