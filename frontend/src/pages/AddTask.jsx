import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AddTask() {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [Time, setTime] = useState("");
  const [Break, setBreak] = useState("");
  const [subject, setSubject] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState("");

  const loadSubjects = async () => {
    const res = await axios.get("http://localhost:5000/api/subjects");
    setSubjects(res.data);
  };

  useEffect(() => {
    loadSubjects();
  }, []);

  const handleAddSubject = async (e) => {
    e.preventDefault();
    if (!newSubject.trim()) return alert("Enter a subject");

    try {
      await axios.post("http://localhost:5000/api/subjects", {
        name: newSubject.trim(),
      });
      setNewSubject("");
      loadSubjects();
      alert("Subject Added!");
    } catch (err) {
      console.error(err);
      alert("Failed to add subject");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/tasks", {
        task,
        desc,
        Time,
        Break,
        subject,
      });

      alert("Task Added Successfully!");

      setTask("");
      setDesc("");
      setTime("");
      setBreak("");
      setSubject("");
    } catch (err) {
      console.error(err);
      alert("Failed to add task");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add Task</h1>

      {/* Navigation */}
      <Link to="/view-task">
        <button style={{ marginRight: "10px" }}>View Tasks</button>
      </Link>
      <Link to="/add-subject">
        <button>Add Subject Page</button>
      </Link>

      {/* Inline Add Subject */}
      <form
        onSubmit={handleAddSubject}
        style={{ display: "flex", gap: "10px", margin: "20px 0" }}
      >
       
       
      </form>

      {/* Add Task Form */}
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        >
          <option value="">Select Subject</option>
          {subjects.map((s) => (
            <option key={s._id} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>

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
          value={Time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <input
          type="time"
          value={Break}
          onChange={(e) => setBreak(e.target.value)}
          required
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

