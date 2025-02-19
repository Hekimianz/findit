import { useState, useEffect } from "react";
import LevelPicker from "../../components/levelPicker/LevelPicker";
import styles from "./Home.module.css";
function Home() {
  const [levels, setLevels] = useState([]);
  useEffect(() => {
    const fetchLevels = async () => {
      try {
        const response = await fetch("http://localhost:3000/levels");
        if (!response.ok) {
          console.error("Error fetching levels", response.status);
          return;
        }
        const data = await response.json();
        console.log(data.levels);
        setLevels(data.levels);
      } catch (err) {
        console.error("error fetching levels");
        throw err;
      }
    };
    setLevels(fetchLevels());
  }, []);
  return (
    <section className={styles.main__cont}>
      <div className={styles.logo__cont}>
        <img src="/logo.png" alt="logo" className={styles.logo} />
        <h1>FindIt</h1>
      </div>
      <h2>Select a level</h2>
      <section className={styles.levelPicker__cont}>
        {levels.length > 0 &&
          levels.map((level) => (
            <LevelPicker key={level.id} name={level.name} level={level.level} />
          ))}
      </section>
    </section>
  );
}

export default Home;
