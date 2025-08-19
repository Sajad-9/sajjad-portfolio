import UpButtonIcon from "../assets/images/upbuttonicon.svg";
import { useEffect, useState } from "react";
const BackToTopButton = ({ dropDownMenuRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  const [scrollValue, setScrollValue] = useState(530);

  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setScrollValue(339);
    } else {
      setScrollValue(529);
    }
  };

  const toggleVisibility = () => {
    if (window.scrollY > scrollValue) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  });

  const scrollToTop = () => {
    dropDownMenuRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`h-[40px] w-[40px] fixed right-5 bottom-5 transition-all duration-200 z-[9999] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        } `}
      >
        <img src={UpButtonIcon} alt="upbutton" />
      </button>
    </div>
  );
};

export default BackToTopButton;
