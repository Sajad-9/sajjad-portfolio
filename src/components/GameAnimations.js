import { useEffect, useRef, useState } from "react";
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

const GameAnimations = () => {
  const customText = <span style={{ fontSize: "17px" }}>Math Space Ship</span>;

  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);
  const fifthRef = useRef(null);

  const [visible, setVisible] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          setVisible((prev) => ({ ...prev, [id]: entry.isIntersecting }));
        });
      },
      { threshold: 0.1 }
    );

    [firstRef, secondRef, thirdRef, fourthRef, fifthRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-12">
      <div className="h-[500px] md:h-[240px]">
        <div
          id="first"
          ref={firstRef}
          className={`mb-[30px] block w-full md:inline-block md:w-1/2 transition-all duration-1000 ease-out transform
          ${
            visible.first
              ? "opacity-100 -translate-y-0"
              : "opacity-0 -translate-y-[100px]"
          }
        `}
          style={{ willChange: "transform, opacity" }}
        >
          <GameInstance1 />
        </div>
        <div
          id="second"
          ref={secondRef}
          className={`block w-full md:inline-block md:w-1/2 transition-all duration-1000 ease-out transform
          ${
            visible.second
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[100px]"
          }
        `}
          style={{ willChange: "transform, opacity" }}
        >
          <GameInstance2 />
        </div>
      </div>
      <div className="h-[500px] md:h-[240px]">
        <div
          id="third"
          ref={thirdRef}
          className={`block w-full md:inline-block md:w-1/2 transition-all duration-1000 ease-out transform`}
          style={{
            opacity: visible.third ? 1 : 0,
            transform: visible.third ? "rotateX(0deg)" : "rotateX(90deg)",
            transformOrigin: "center",
            transition: "opacity 1s ease, transform 1s ease",
            willChange: "opacity, transform",
          }}
        >
          <GameInstance1
            backgroundImage={MathSpaceShipBackground}
            title={customText}
            description="Solve math to race through space! Practice addition, subtraction, multiplication, and division on every mission."
            images={mathSpaceShipImages}
            link={"https://sajad-9.github.io/MathSpaceShipExport/"}
          />
        </div>

        <div
          id="fourth"
          ref={fourthRef}
          className={`block w-full md:inline-block md:w-1/2  transition-all duration-1000 ease-out transform`}
          style={{
            opacity: visible.fourth ? 1 : 0,
            transform: visible.fourth ? "rotateY(0deg)" : "rotateY(90deg)",
            transformOrigin: "center",
            transition: "opacity 1s ease, transform 1s ease",
            willChange: "opacity, transform",
          }}
        >
          <GameInstance2
            backgroundImage={EnglishWorldBackground}
            title="English World"
            description="Learn English with fun flash cards! Match words and pictures to build vocabulary fast."
            images={englishWorldImages}
            link={"https://sajad-9.github.io/EnglishWorldExport/"}
          />
        </div>
      </div>
      <div className="grid grid-cols-1  h-[240px] w-[360px] uplg:w-[600px]  mx-auto ">
        <div
          id="fifth"
          ref={fifthRef}
          className={`flex-1 transition-all duration-1000 ease-out transform
          ${visible.fifth ? "opacity-100 scale-100" : "opacity-0 scale-50"}
        `}
          style={{ willChange: "transform, opacity" }}
        >
          <GameInstance3 />
        </div>
      </div>
    </div>
  );
};

export default GameAnimations;
