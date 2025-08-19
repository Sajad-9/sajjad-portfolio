import { useState } from "react";
import { motion } from "framer-motion";
import { useImageZoom } from "../context/ImageZoomContext";

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel = ({ images = {} }) => {
  const { image1, image2, image3, image4 } = images;
  const imgs = [image1, image2, image3, image4];
  const [imgIndex, setImgIndex] = useState(0);

  const { activeImg, setActiveImg } = useImageZoom();

  return (
    <div className="relative overflow-hidden bg-transparent py-8 w-[100px] h-[120px]">
      <motion.div
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        className="flex cursor-pointer items-center "
      >
        <Images
          imgIndex={imgIndex}
          activeImg={activeImg}
          setActiveImg={setActiveImg}
          imgs={imgs}
        />
      </motion.div>
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} imgs={imgs} />
    </div>
  );
};

const Images = ({ imgIndex, setActiveImg, imgs }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            onClick={() => setActiveImg(imgSrc)}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.8 }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-full h-full shrink-0 rounded-xl bg-neutral-800 object-cover"
          />
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex, imgs }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-2 w-2 rounded-full transition-colors ${
              idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};
