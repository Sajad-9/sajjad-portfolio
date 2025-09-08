import "../styles/App.css";
import "../styles/index.css";
import Particles from "../components/Particles";
import BackToTopButton from "../components/BackToTopButton";
import Header from "../components/Header";
import { useRef } from "react";
import { ImageZoomProvider } from "../context/ImageZoomContext";
import Games from "../components/Games";
import Footer from "../components/Footer";
const HomePage = () => {
  const dropDownMenuRef = useRef(null);
  const contactInformationRef = useRef(null);
  const gamesRef = useRef(null);
  return (
    <ImageZoomProvider>
      <div className="app">
        <Particles id="particles" />
        <Header
          dropDownMenuRef={dropDownMenuRef}
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

          <div className=" w-full" ref={contactInformationRef}>
            <Footer />
          </div>
          <BackToTopButton dropDownMenuRef={dropDownMenuRef} />
        </div>
      </div>
    </ImageZoomProvider>
  );
};

export default HomePage;
