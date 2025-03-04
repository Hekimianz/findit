import { StrictMode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Level from "./pages/level/Level";
import Leaderboard from "./pages/leaderboard/Leaderboard";
import Footer from "./components/footer/Footer";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/level/:id" element={<Level />} />
        <Route path="/leaderboard/:id" element={<Leaderboard />} />
      </Routes>
    </Router>
    <Footer />
  </StrictMode>
);
