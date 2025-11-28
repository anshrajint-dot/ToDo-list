import axios from "axios";
import { useEffect, useState } from "react";

export default function ViewTask() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/tasks");
    setTasks(res.data);
  };

  const markCompleted = async (id) => {
    await axios.put(`http://localhost:5000/api/tasks/${id}/complete`);
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center" }}>Your Tasks</h1>

      <div style={styles.cardContainer}>
        {tasks.map((t) => (
          <div key={t._id} style={styles.card}>
            <h3>{t.task}</h3>
            <p>{t.desc}</p>

            <p><b>Email:</b> {t.email}</p>
            <p><b>Phone:</b> {t.phone}</p>

            <div style={{ marginTop: "10px" }}>
              <label>
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => markCompleted(t._id)}
                />
                {" "} Mark Completed
              </label>
            </div>

            {t.completed && (
              <p style={{ color: "green", fontWeight: "bold" }}>✔ Completed</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "20px",
    marginTop: "30px"
  },
  card: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    borderLeft: "5px solid #007bff"
  }
};
