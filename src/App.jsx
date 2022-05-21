import { useState } from "react";
import { HashRouter } from "react-router-dom";
import "./App.scss";
import BackgroundLayout from "./components/background/BackgroundLayout";
import ContactList from "./components/contacts/ContactList";
import AboutPage from "./pages/about-page/AboutPage";
import Header from "./pages/header/Header";
import Home from "./pages/home-page/Home";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const onMouseMoveTranslate = (e) => {
    let x = e.clientX / 15;
    let y = e.clientY / 15;
    setMousePosition({ x, y });
  };

  return (
    <HashRouter>
      <div className="app" onMouseMove={(e) => onMouseMoveTranslate(e)}>
        <BackgroundLayout mousePosition={mousePosition} />
        <div className="app__content">
          <Header />
          <ContactList />
          {/* <AnchorLink />  position: fixed */}
          <Home />
          <AboutPage />
          {/* <SkillsPage /> */}
          {/* <Project /> */}
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
