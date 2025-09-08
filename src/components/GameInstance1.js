import { motion } from "framer-motion";
import { SwipeCarousel } from "./Slider";

import "../styles/game-instance3.css";
import SurvivorBackground from "../assets/images/survivor_background.png";
import SurvivorScreenShot1 from "../assets/images/survivor_screenshot1.png";
import SurvivorScreenShot2 from "../assets/images/survivor_screenshot2.png";
import SurvivorScreenShot3 from "../assets/images/survivor_screenshot3.png";
import SurvivorScreenShot4 from "../assets/images/survivor_screenshot4.png";
import "../styles/game-instance1.css";

const survivorImages = {
  image1: SurvivorScreenShot1,
  image2: SurvivorScreenShot2,
  image3: SurvivorScreenShot3,
  image4: SurvivorScreenShot4,
};

const customText = <span style={{ fontSize: "18px" }}>Survivor3D(PC)</span>;

const customButtonText = <span style={{ fontSize: "15px" }}>DOWNLOAD!</span>;

const GameInstance1 = ({
  backgroundImage = SurvivorBackground,
  title = customText,
  description = "Survive five days after a plane crash—gather, craft, and stay alive until rescue arrives.",
  images = survivorImages,
  link = "https://drive.google.com/file/d/1dIW35EFGQ9x9xcBOXA2UDqBVAburgpZ1/view",
  buttonText = customButtonText,
}) => {
  return (
    <div>
      <div class="card">
        <div
          class="card-image"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>
        <div class="card-overlay"></div>

        <div class="card-header">
          <div class="card-header-title">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              style={{ transformOrigin: "center center" }}
            >
              <h2 class="card-title">{title}</h2>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
              style={{ transformOrigin: "center center" }}
            >
              <button
                onClick={() => window.open(link)}
                className="h-[40px] w-[120px] rounded-full bg-[linear-gradient(135deg,#000_10%,#0000ff_80%)] text-[15px] pl-2"
              >
                {buttonText}
              </button>
            </motion.div>
          </div>
        </div>

        <div class="card-content">
          <div className="flex flex-row-reverse">
            <div className="ml-5 mr-5 mt-[30px]">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                style={{ transformOrigin: "center center" }}
              >
                <p class="card-description">{description}</p>
              </motion.div>
            </div>
            <div class="carousel">
              <SwipeCarousel images={images} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameInstance1;
