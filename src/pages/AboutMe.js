import AboutMeSection from "../components/AboutMeSection";
import Particles from "../components/Particles";
import { useNavigate } from "react-router-dom";
import HomePageButton from "../assets/images/home.svg";
import { motion } from "framer-motion";
const AboutMe = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <Particles id="particles" />
      <div className="mb-[100px]">
        <AboutMeSection />
      </div>
      <div className="fixed right-5 bottom-5 " onClick={goToHome}>
        <motion.div
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.8 }}
          style={{ transformOrigin: "center center" }}
          className="cursor-pointer"
        >
          <img
            alt="homepage"
            src={HomePageButton}
            className="w-[50px] h-[50px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
