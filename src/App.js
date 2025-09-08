import "./styles/App.css";
import "./styles/index.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";

function App() {
  const localHost =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";
  const BaseURL = localHost
    ? "http://localhost:5000"
    : "http://192.168.1.103:5000";
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutme" element={<AboutMe />} />
    </Routes>
  );
}

export default App;
