import { useState } from "react";
import { HashRouter } from "react-router-dom";
import "./App.scss";
import BackgroundLayout from "./components/background/BackgroundLayout";
import ContactList from "./components/contacts/ContactList";
import ContactPage from "./pages/contact-page/ContactPage";
import Header from "./pages/header/Header";
import Home from "./pages/home-page/Home";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [isModalOpen, setIsModalOpen] = useState(true);

  const onMouseMoveTranslate = (e) => {
    let x = e.clientX / 15;
    let y = e.clientY / 15;
    setMousePosition({ x, y });
  };

  const closeContactForm = () => {
    setIsModalOpen(false);
  };

  const openContactForm = () => {
    setIsModalOpen(true);
  };

  return (
    <HashRouter>
      <div className="app" onMouseMove={(e) => onMouseMoveTranslate(e)}>
        <BackgroundLayout mousePosition={mousePosition} />
        {isModalOpen && <ContactPage closeContactForm={closeContactForm} />}
        <div className="app__content">
          <Header />
          <ContactList />
          {/* <ContactUs /> */}
          {/* <AnchorLink />  position: fixed */}
          <Home openContactForm={openContactForm} />
          {/* <SkillsPage /> */}
          {/* <Project /> */}
        </div>
      </div>
    </HashRouter>
  );
}

export default App;