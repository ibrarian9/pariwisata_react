import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Borobudur from "./Components/Borobudur.jsx";
import Rajampat from "./Components/RajaAmpat.jsx";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Toba from "./Components/Toba.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="Borobudur" element={<Borobudur />} />
          <Route path="Raja-Ampat" element={<Rajampat />} />
          <Route path="Toba" element={<Toba />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
