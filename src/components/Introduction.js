import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import title2 from "../assets/images/SEYED SAJAD HOSEINI.svg";

const Introduction = () => {
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
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }}
      animate={
        isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.1 }
      }
      transition={{ duration: 0.5 }}
      style={{ transformOrigin: "center" }}
    >
      <img
        src={title2}
        alt="title"
        className="h-[150px] w-[150px] midsm:mt-[70px] midsm:h-[200px] midsm:w-[200px] upsm:mt-[130px] upsm:h-[250px] upsm:w-[250px] md:mt-[80px] md:h-[300px] md:w-[300px] md:mr-[70px] upmd:mt-[50px] upmd:h-[350px] upmd:w-[350px] lg:mt-[100px] lg:h-[400px] lg:w-[400px]"
      />
    </motion.div>
  );
};

export default Introduction;
