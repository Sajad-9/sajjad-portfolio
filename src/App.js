import "./styles/App.css";
import "./styles/index.css";
import Header1 from "./components/Header1";
import Sample from "./components/Sample";
import Footer1 from "./components/Footer1";
import Particles from "./components/Particles";

function App() {
  const localHost =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";
  const BaseURL = localHost
    ? "http://localhost:5000"
    : "http://192.168.1.103:5000";
  return (
    <div className="app">
      <Particles id="particles" />
      <Header1 />

      <div className="flex flex-col xl:flex-row">
        <Sample />
        <Sample />
      </div>
      <Footer1 />
    </div>
  );
}

export default App;
