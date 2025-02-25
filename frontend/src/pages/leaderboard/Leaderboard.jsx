import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getLeaderboard, getLevels } from "../../api/api";
import LeaderBoardRow from "../../components/leaderboardRow/LeaderBoardRow";
import styles from "./Leaderboard.module.css";

function Leaderboard() {
  const { id } = useParams();
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [levelName, setLevelName] = useState("");

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        setLoading(true);
        const data = await getLeaderboard(id);
        setLeaderboard(data.leaderboard);

        const levelData = await getLevels(id);
        setLevelName(levelData.level.name);
      } catch (err) {
        console.error("error fetching leaderboard");
        throw err;
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };
    fetchData(id);
  }, []);

  console.log(leaderboard);
  console.log(levelName);

  return (
    <section className={styles.main__cont}>
      {loading ? (
        <span className={styles.loader}></span>
      ) : (
        <div className={styles.leaderboard}>
          <h1>{`Leaderboard for ${levelName}`}</h1>
          <ul>
            {leaderboard
              .sort((a, b) => {
                const timeToSeconds = (timeStr) => {
                  const [minutes, seconds] = timeStr.split(":").map(Number);
                  return minutes * 60 + seconds;
                };
                return timeToSeconds(a.time) - timeToSeconds(b.time);
              })
              .map((row, index) => (
                <LeaderBoardRow
                  key={row.id}
                  name={row.name}
                  time={row.time}
                  index={index}
                />
              ))}
          </ul>
          <Link to="/" className={styles.button}>
            Exit
          </Link>
        </div>
      )}
    </section>
  );
}

export default Leaderboard;
