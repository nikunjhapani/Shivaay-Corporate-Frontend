// utils/aos.js
import AOS from "aos";
import "aos/dist/aos.css";

export const initAOS = () => {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    offset: 100,
  });
};
