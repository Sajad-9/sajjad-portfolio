import GameInstance1 from "./GameInstance1";
import GameInstance2 from "./GameInstance2";
import GameInstance3 from "./GameInstance3";
import MathSpaceShipBackground from "../assets/images/mathspace_background.jpg";
import EnglishWorldBackground from "../assets/images/english_background.png";
import EnglishWorldScreenshot1 from "../assets/images/english_screenshot1.png";
import EnglishWorldScreenshot2 from "../assets/images/english_screenshot2.png";
import EnglishWorldScreenshot3 from "../assets/images/english_screenshot3.png";
import EnglishWorldScreenshot4 from "../assets/images/english_screenshot4.png";
import MathSpaceShipScreenshot1 from "../assets/images/mathspace_screenshot3.jpg";
import MathSpaceShipScreenshot2 from "../assets/images/mathspace_screenshot4.jpg";
import MathSpaceShipScreenshot3 from "../assets/images/mathspace_screenshot2.jpg";
import MathSpaceShipScreenshot4 from "../assets/images/mathspace_screenshot1.jpg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useImageZoom } from "../context/ImageZoomContext";

const mathSpaceShipImages = {
  image1: MathSpaceShipScreenshot1,
  image2: MathSpaceShipScreenshot2,
  image3: MathSpaceShipScreenshot3,
  image4: MathSpaceShipScreenshot4,
};
const englishWorldImages = {
  image1: EnglishWorldScreenshot1,
  image2: EnglishWorldScreenshot2,
  image3: EnglishWorldScreenshot3,
  image4: EnglishWorldScreenshot4,
};
const Games = () => {
  const { activeImg, setActiveImg } = useImageZoom();
  useEffect(() => {
    if (activeImg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeImg]);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const customText1 = <span style={{ fontSize: "18px" }}>Math Space Ship</span>;
  const customText2 = <span style={{ fontSize: "20px" }}>English World</span>;

  return (
    <div className="space-y-12">
      {activeImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setActiveImg(null)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <img
              src={activeImg}
              className="max-w-[90vw] max-h-[90vh] rounded-lg"
              alt="activeimage"
            />
            <button
              onClick={() => setActiveImg(null)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
      <div className="h-[500px] md:h-[240px]">
        <div
          className="block w-full md:inline-block md:w-1/2 mt-5 mb-9"
          data-aos="fade-up"
        >
          <GameInstance1 />
        </div>

        <div
          className="block w-full md:inline-block md:w-1/2"
          data-aos="flip-left"
        >
          <GameInstance2 />
        </div>
      </div>
      <div className="h-[500px] md:h-[240px]">
        <div
          className="block w-full md:inline-block md:w-1/2 mb-9"
          data-aos="fade-down"
        >
          <GameInstance1
            backgroundImage={EnglishWorldBackground}
            title={customText2}
            description="Learn English with fun flash cards! Match words and pictures to build vocabulary fast."
            images={englishWorldImages}
            link={"https://sajad-9.github.io/EnglishWorldExport/"}
            buttonText={"PLAY NOW!"}
          />
        </div>
        <div
          className="block w-full md:inline-block md:w-1/2"
          data-aos="flip-right"
        >
          <GameInstance2
            backgroundImage={MathSpaceShipBackground}
            title={customText1}
            description="Solve math to race through space! Practice addition, subtraction, multiplication, and division on every mission."
            images={mathSpaceShipImages}
            link={"https://sajad-9.github.io/MathSpaceShipExport/"}
          />
        </div>
      </div>
      <div className="mb-5 w-[360px] lg:w-[600px] mx-auto" data-aos="zoom-in">
        <GameInstance3 />
      </div>
    </div>
  );
};

export default Games;
