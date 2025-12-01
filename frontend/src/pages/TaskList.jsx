import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  // Load Tasks
  const loadTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  // DELETE TASK
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    loadTasks();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Tasks</h2>

      <Link to="/add">
        <button style={{ marginBottom: "15px" }}>Add Task</button>
      </Link>

      {tasks.length === 0 && <p>No tasks found</p>}

      {tasks.map((task) => (
        <div
          key={task._id}
          style={{
            padding: "10px",
            margin: "10px 0",
            background: "#f2f2f2",
            borderRadius: "6px",
          }}
        >
          <h3>{task.task}</h3>
          <p>{task.desc}</p>
          <p>{task.time}</p>

          {/* Edit Button */}
          <Link to={`/edit/${task._id}`}>
            <button>Edit</button>
          </Link>

          {/* Delete Button */}
          <button
            onClick={() => deleteTask(task._id)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
