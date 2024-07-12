import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePages from "../pages/HomePages";

export function BrowserRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePages />} />
      </Routes>
    </Router>
  );
}
