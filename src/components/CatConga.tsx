import { useEffect, useRef, useState } from "react";

export const CatConga = () => {
  const [bgColor, setBgColor] = useState("#000");
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true; // Asegura que esté muteado
      videoRef.current
        .play()
        .catch((error) =>
          console.error("Error al reproducir el video:", error)
        );
    }
  }, [videoRef]);

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
        ref={videoRef}
        style={{
          backgroundColor: bgColor,
          transition: "background-color 0.5s ease",
        }}
        className="w-full h-full animate-fade-in"
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline={true}
      >
        <source src="./video/gato-conga.webm" type="video/webm" />
      </video>
    </>
  );
};
