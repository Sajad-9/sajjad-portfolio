import { motion } from "framer-motion";
import { SwipeCarousel } from "./Slider";
import "../styles/game-instance2.css";

import JumperBirdBackGround from "../assets/images/jumperbird_background.png";
import JumperBirdScreenShot1 from "../assets/images/jumperbird_screenshot1.png";
import JumperBirdScreenShot2 from "../assets/images/jumperbird_screenshot2.png";
import JumperBirdScreenShot3 from "../assets/images/jumperbird_screenshot3.png";
import JumperBirdScreenShot4 from "../assets/images/jumperbird_screenshot4.png";
const jumperBirdImages = {
  image1: JumperBirdScreenShot1,
  image2: JumperBirdScreenShot2,
  image3: JumperBirdScreenShot3,
  image4: JumperBirdScreenShot4,
};
const GameInstance2 = ({
  backgroundImage = JumperBirdBackGround,
  title = "Jumper Bird",
  description = "Tap to flap and dodge the pipes in this fast-paced flying challenge. How far can you soar before gravity wins?",
  images = jumperBirdImages,
  link = "https://sajad-9.github.io/SpaceShapeExport/",
}) => {
  return (
    <div>
      <div class="card2">
        <div
          class="card2-image"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>
        <div class="card2-overlay"></div>

        <div class="card2-header">
          <div class="card2-header-title">
            <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }}>
              <button
                onClick={() => window.open(link)}
                className="h-[40px] w-[120px] rounded-full bg-[linear-gradient(135deg,#000_10%,#0000ff_80%)] text-[15px] pl-2 "
              >
                PLAY NOW!
              </button>
            </motion.div>
            <h2 class="card2-title">{title}</h2>
          </div>
        </div>

        <div class="card2-content">
          <div className="flex flex-row-reverse">
            <div className="ml-5 mr-5 mt-[30px]">
              <p class="card2-description">{description}</p>
            </div>
            <div class="carousel2">
              <SwipeCarousel images={images} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameInstance2;
