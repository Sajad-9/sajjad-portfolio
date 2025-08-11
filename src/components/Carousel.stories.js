import Carousel from "./Carousel.js";
import { slides } from "../assets/data/carouselData.js";

export default {
  title: "components/Carousel",
  component: Carousel,
};

export const Form1 = () => <Carousel data={slides} />;
