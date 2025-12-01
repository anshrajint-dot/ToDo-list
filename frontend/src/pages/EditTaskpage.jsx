import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditTaskpage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [Time, setTime] = useState("");
  const [Break, setBreak] = useState("");
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTask = async () => {
      const res = await axios.get(`http://localhost:5000/api/tasks/${id}`);
      setTask(res.data.task);
      setDesc(res.data.desc);
      setTime(res.data.Time || "");
      setBreak(res.data.Break || "");
      setCompleted(res.data.completed);
      setLoading(false);
    };
    loadTask();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/tasks/${id}`, {
      task,
      desc,
      Time,
      Break,
      completed
    });
    navigate("/view-task");
  };

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center" }}>Edit Task</h1>
      <form onSubmit={handleUpdate} style={styles.form}>
        <label>Task:</label>
        <input type="text" value={task} onChange={e => setTask(e.target.value)} required />

        <label>Description:</label>
        <textarea value={desc} onChange={e => setDesc(e.target.value)} required />

        <label>Time:</label>
        <input type="text" value={Time} onChange={e => setTime(e.target.value)} />

        <label>Break:</label>
        <input type="text" value={Break} onChange={e => setBreak(e.target.value)} />

        <label>
          <input type="checkbox" checked={completed} onChange={e => setCompleted(e.target.checked)} /> Completed
        </label>

        <button type="submit" style={styles.button}>Update Task</button>
      </form>
    </div>
  );
}

const styles = {
  form: { display: "flex", flexDirection: "column", maxWidth: "400px", margin: "0 auto", gap: "15px" },
  button: { padding: "10px", background: "#007bff", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }
};
