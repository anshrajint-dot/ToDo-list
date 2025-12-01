import { useState } from "react";
import axios from "axios";

export default function AddSubject() {
  const [subject, setSubject] = useState("");

  const addSubject = async (e) => {
    e.preventDefault();
    if (!subject.trim()) return alert("Enter a subject");

    try {
      await axios.post("http://localhost:5000/api/subjects", {
        name: subject.trim()
      });

      alert("Subject Added!");
      setSubject("");

    } catch (error) {
      console.log(error);
      alert("Failed to add subject");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add Subject</h1>

      <form onSubmit={addSubject} style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Enter subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
