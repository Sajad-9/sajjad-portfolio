import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const preSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
  return (
    <div className="relative flex justify-center items-center w-[300px] h-[169px] flex-shrink-0 mx-auto self-center">
      <BsArrowLeftCircleFill
        className="absolute left-4 w-8 h-8 text-white drop-shadow-md hover:text-gray-200 hover:cursor-pointer"
        onClick={nextSlide}
      />
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={`rounded-md shadow-md w-full h-full transition-opacity duration-300 ease-in-out ${
              slide === idx ? "block" : "hidden"
            }`}
          />
        );
      })}
      <BsArrowRightCircleFill
        className="absolute right-4 w-8 h-8 text-white drop-shadow-md hover:text-gray-200 hover:cursor-pointer"
        onClick={preSlide}
      />
      <span className="absolute bottom-4 flex">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={`h-2 w-2 rounded-full border-none outline-none shadow-md mx-1 cursor-pointer ${
                slide === idx ? "bg-white" : "bg-gray-500"
              }`}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
