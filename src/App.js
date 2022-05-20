import { useState } from "react";
import "./App.scss";
import BackgroundLayout from "./components/background/BackgroundLayout";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const onMouseMoveTranslate = (e) => {
    let x = e.clientX / 15;
    let y = e.clientY / 15;
    setMousePosition({ x, y });
  };
  return (
    <div className="app" onMouseMove={(e) => onMouseMoveTranslate(e)}>
      <header className="app-header"></header>
      <BackgroundLayout mousePosition={mousePosition} />
    </div>
  );
}

export default App;
