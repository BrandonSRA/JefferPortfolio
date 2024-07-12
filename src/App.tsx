import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import HomePages from "./pages/HomePages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePages />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
