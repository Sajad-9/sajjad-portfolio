import { motion } from "framer-motion";
import { SwipeCarousel } from "./Slider";

import "../styles/game-instance3.css";
import SpaceShapeBackground from "../assets/images/spaceship_background.png";
import SpaceShapeScreenShot1 from "../assets/images/spaceship_screenshot1.png";
import SpaceShapeScreenShot2 from "../assets/images/spaceship_screenshot2.png";
import SpaceShapeScreenShot3 from "../assets/images/spaceship_screenshot3.png";
import SpaceShapeScreenShot4 from "../assets/images/spaceship_screenshot4.png";
const survivorImages = {
  image1: SpaceShapeScreenShot1,
  image2: SpaceShapeScreenShot2,
  image3: SpaceShapeScreenShot3,
  image4: SpaceShapeScreenShot4,
};
const GameInstance3 = ({
  backgroundImage = SpaceShapeBackground,
  title = "Space Shape",
  description = "a fun game where kids join circles, squares, and diamonds to build space-themed objects and learn geometry.",
  images = survivorImages,
  link = "https://sajad-9.github.io/SpaceShapeExport/",
}) => {
  return (
    <div>
      <div class="card3">
        <div
          class="card3-image"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>
        <div class="card3-overlay"></div>

        <div class="card3-header">
          <div class="card3-header-title">
            <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }}>
              <button
                onClick={() => window.open(link)}
                className="h-[40px] w-[120px] rounded-full bg-[linear-gradient(135deg,#000_10%,#0000ff_80%)] text-[15px] pl-2"
              >
                PLAY NOW!
              </button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              style={{ transformOrigin: "center center" }}
            >
              <h2 class="card3-title">{title}</h2>
            </motion.div>
          </div>
        </div>

        <div class="card3-content">
          <div className="flex flex-row-reverse">
            <div className="ml-5 mr-5 mt-[30px]">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                style={{ transformOrigin: "center center" }}
              >
                <p class="card3-description">{description}</p>
              </motion.div>
            </div>
            <div class="carousel3">
              <SwipeCarousel images={images} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameInstance3;
