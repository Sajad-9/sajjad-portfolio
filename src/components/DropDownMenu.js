import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AboutMe from "../assets/images/About me.svg";
import ContactInfo from "../assets/images/Contact Info.svg";
import LetsPlay from "../assets/images/Let's play.svg";

const DropDownMenu = ({ ref, aboutMeRef, contactInformationRef, gamesRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  const [scrollValue, setScrollValue] = useState(530);

  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setScrollValue(340);
    } else {
      setScrollValue(530);
    }
  };

  const toggleVisibility = () => {
    if (window.scrollY > scrollValue) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  });

  const scrollToAboutME = () => {
    aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContactInformatoin = () => {
    contactInformationRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToGames = () => {
    gamesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={ref} className="flex flex-col items-start w-fit ">
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <button
          onClick={scrollToGames}
          className={`w-[400px] h-[100px] lg:w-[600px] lg:h-[150px] bg-[linear-gradient(135deg,#000_10%,#0000ff_80%)] flex items-center justify-center mb-5 lg:mb-10 transition-all pr-10 ${
            isVisible ? "animate-slide-bounce-in-top" : "animate-slide-out-top"
          }`}
          style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)" }}
        >
          <img
            src={LetsPlay}
            alt="letsplay"
            className="h-[50px] w-[250px] lg:w-[350px] lg:h-[100px]"
          />
        </button>
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <button
          onClick={scrollToAboutME}
          className={`w-[320px] h-[100px] lg:w-[480px] lg:h-[150px] bg-[linear-gradient(135deg,#000_10%,#0000ff_80%)] flex items-center justify-center mb-5 lg:mb-10 transition-all pr-10 ${
            isVisible
              ? "animate-slide-bounce-in-middle"
              : "animate-slide-out-middle"
          }`}
          style={{ clipPath: "polygon(0 0, 100% 0, 75% 100%, 0% 100%)" }}
        >
          <img
            src={AboutMe}
            alt="letsplay"
            className="h-[50px] w-[170px] lg:w-[250px] lg:h-[100px]"
          />
        </button>
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <button
          onClick={scrollToContactInformatoin}
          className={`w-[240px] h-[100px] lg:w-[360px] lg:h-[150px] bg-[linear-gradient(135deg,#000_10%,#0000ff_80%)] flex items-center justify-center transition-all pr-10  ${
            isVisible
              ? "animate-slide-bounce-in-bottom"
              : "animate-slide-out-bottom"
          }`}
          style={{ clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)" }}
        >
          <img
            src={ContactInfo}
            alt="letsplay"
            className="h-[50px] w-[150px] lg:w-[230px] lg:h-[100px]"
          />
        </button>
      </motion.div>
    </div>
  );
};

export default DropDownMenu;
