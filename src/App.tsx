import { useEffect, useState } from "react";
import { CatConga, DoNotPressBtn } from "./components";

function App() {
  const [showGatoConga, setShowGatoConga] = useState(false);

  useEffect(() => {
    const congaSong = new Audio("/audio/konga.mp3");

    if (showGatoConga) {
      congaSong.play();
    }
  }, [showGatoConga]);

  return (
    <main className="flex items-center justify-center w-dvw h-dvh bg-[#09122C]">
      {!showGatoConga ? (
        <DoNotPressBtn setShowGatoConga={setShowGatoConga} />
      ) : (
        <CatConga />
      )}
    </main>
  );
}

export default App;
