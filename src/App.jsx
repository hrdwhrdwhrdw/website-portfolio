import { useState } from "react";
import { HashRouter } from "react-router-dom";
import "./App.scss";
import BackgroundLayout from "./components/background/BackgroundLayout";
import ContactList from "./components/contacts/ContactList";
import ContactPage from "./pages/contact-page/ContactPage";
import Header from "./pages/header/Header";
import Home from "./pages/home-page/Home";
import Skills from "./pages/skills-page/Skills";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onMouseMoveTranslate = (e) => {
    let x = e.clientX / 15;
    let y = e.clientY / 15;
    setMousePosition({ x, y });
  };

  const closeContactForm = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "overlay";
  };

  const openContactForm = () => {
    document.body.style.overflow = "hidden";
    setIsModalOpen(true);
  };

  return (
    <HashRouter>
      <div className="app" onMouseMove={(e) => onMouseMoveTranslate(e)}>
        <BackgroundLayout mousePosition={mousePosition} />
        {isModalOpen && <ContactPage closeContactForm={closeContactForm} />}
        <div className="app__content">
          <Header isModalOpen={isModalOpen} />
          <ContactList />
          {/* <AnchorLink />  position: fixed */}
          <div className="app__wrapper">
            <Home openContactForm={openContactForm} />
            <Skills />
            {/* <Project /> */}
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
