import { useEffect, useState } from "react";
import gatoCongaAnimation from "../assets/img/gato-conga.png";

export const CatConga = () => {
  const [bgColor, setBgColor] = useState("#000");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      setBgColor(randomColor);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <picture
        style={{
          backgroundColor: bgColor,
          transition: "background-color 0.5s ease",
        }}
        className="w-full h-full animate-fade-in flex justify-center items-center"
      >
        <source srcSet={gatoCongaAnimation} type="image/apng" />
        <img width={480} src={gatoCongaAnimation} alt="" />
      </picture>
    </>
  );
};
