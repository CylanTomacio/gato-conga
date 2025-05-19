import { useEffect, useState } from "react";

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
      <video
        style={{
          backgroundColor: bgColor,
          transition: "background-color 0.5s ease",
        }}
        className="w-full h-full animate-fade-in"
        muted
        playsInline
        autoPlay
        loop
      >
        <source src="./video/gato-conga.webm" type="video/webm" />
      </video>
    </>
  );
};
