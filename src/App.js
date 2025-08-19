import "./styles/App.css";
import "./styles/index.css";
import Particles from "./components/Particles";
import BackToTopButton from "./components/BackToTopButton";
import Header from "./components/Header";
import { useRef } from "react";
import { ImageZoomProvider } from "./context/ImageZoomContext";
import Games from "./components/Games";
import AboutMeSection from "./components/AboutMeSection";
import Footer from "./components/Footer";

function App() {
  const localHost =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";
  const BaseURL = localHost
    ? "http://localhost:5000"
    : "http://192.168.1.103:5000";
  const dropDownMenuRef = useRef(null);
  const aboutMeRef = useRef(null);
  const contactInformationRef = useRef(null);
  const gamesRef = useRef(null);
  return (
    <ImageZoomProvider>
      <div className="app">
        <Particles id="particles" />
        <Header
          dropDownMenuRef={dropDownMenuRef}
          aboutMeRef={aboutMeRef}
          contactInformationRef={contactInformationRef}
          gamesRef={gamesRef}
        />
        <div className="flex flex-col items-center">
          <div
            className="relative flex flex-col items-center bg-blue-800 bg-opacity-50 w-[80%] min-w-[380px] mt-[80px] pt-[100px] rounded-[20px] border-slate-800 border-2 pb-[50px] md:min-w-[750px] uplg:min-w-[1050px]"
            ref={gamesRef}
          >
            <div className=" absolute top-5 left-8">
              <p className="text-[40px]">Let's Play!</p>
            </div>
            <Games />
          </div>
          <div
            className="relative flex flex-col items-center bg-blue-800 bg-opacity-50 w-[80%] min-w-[380px] mt-[80px] pt-[100px] rounded-[20px] border-slate-800 border-2 pb-[50px] md:min-w-[750px] uplg:min-w-[1050px]"
            ref={aboutMeRef}
          >
            <div className=" absolute top-5 left-8">
              <p className="text-[40px]">About me:</p>
            </div>
            <AboutMeSection />
          </div>
          <div className=" w-full" ref={contactInformationRef}>
            <Footer />
          </div>
          <BackToTopButton dropDownMenuRef={dropDownMenuRef} />
        </div>
      </div>
    </ImageZoomProvider>
  );
}

export default App;
