import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTask from "./pages/AddTask";
import ViewTask from "./pages/ViewTask";
import AddSubject from "./pages/AddSubject"; 
import EditTask from "./pages/EditTaskpage";   // ✅ import EditTaskpage as EditTask

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddTask />} />
        <Route path="/view-task" element={<ViewTask />} />
        <Route path="/add-subject" element={<AddSubject />} />
        <Route path="/edit-task/:id" element={<EditTask />} /> {/* ✅ use EditTask */}
      </Routes>
    </BrowserRouter>
  );
}
