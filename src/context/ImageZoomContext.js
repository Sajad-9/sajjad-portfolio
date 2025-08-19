import { createContext, useContext, useState } from "react";
const ImageZoomContext = createContext();

export const ImageZoomProvider = ({ children }) => {
  const [activeImg, setActiveImg] = useState(null);
  return (
    <ImageZoomContext.Provider value={{ activeImg, setActiveImg }}>
      {children}
    </ImageZoomContext.Provider>
  );
};

export const useImageZoom = () => useContext(ImageZoomContext);
