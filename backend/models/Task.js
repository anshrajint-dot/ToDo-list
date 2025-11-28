import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  task: String,
  desc: String,
  email: String,
  phone: String,
  completed: { type: Boolean, default: false }
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
