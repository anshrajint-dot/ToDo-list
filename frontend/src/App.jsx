import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTask from "./pages/AddTask";
import ViewTask from "./pages/ViewTask";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddTask />} />
        <Route path="/view-task" element={<ViewTask />} />
      </Routes>
    </BrowserRouter>
  );
}
