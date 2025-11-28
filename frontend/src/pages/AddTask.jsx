import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AddTask() {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [Time, setTime] = useState("");
  const [Break, setBreak] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/tasks", {
        task,
        desc,
        Time,
        Break,
      });

      alert("Task Added Successfully!");

      // reset all fields
      setTask("");
      setDesc("");
      setTime("");
      setBreak("");

    } catch (err) {
      console.error(err);
      alert("Failed to add task");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add Task</h1>

      {/* View Task Button */}
      <Link to="/view-task">
        <button style={{ marginBottom: "20px" }}>View Tasks</button>
      </Link>

      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        />

        <input
          type="time"
          placeholder="Start Time"
          value={Time}
          onChange={(e) => setTime(e.target.value)}
          required
        />

        <input
          type="time"
          placeholder="Break length"
          value={Break}
          onChange={(e) => setBreak(e.target.value)}
          required
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}
