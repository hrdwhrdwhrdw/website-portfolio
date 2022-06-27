import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import BackgroundLayout from "./components/background/BackgroundLayout";
import ContactList from "./components/contacts/ContactList";
import Preloader from "./components/preloader/Preloader";
import ContactPage from "./pages/contact-page/ContactPage";
import Header from "./pages/header/Header";

const Home = lazy(() => import("./pages/home-page/Home"));
const Projects = lazy(() => import("./pages/projects-page/Projects"));
const Skills = lazy(() => import("./pages/skills-page/Skills"));

export const App = React.memo(function App() {
  const [initialize, setInitialize] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInitialize(true);
    }, 3500);
  }, [initialize]);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  useEffect(() => {
    setIsAppLoaded(true);
  }, []);

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
    <BrowserRouter>
      <div className="app" onMouseMove={(e) => onMouseMoveTranslate(e)}>
        <div className={"loader" + (isAppLoaded ? " loader-hidden" : "")}></div>
        <div
          className={"loader-after" + (isAppLoaded ? " loader-hidden" : "")}
        ></div>
        <div className={"app-wrapper" + (isAppLoaded ? " loaded" : "")}>
          <BackgroundLayout mousePosition={mousePosition} />
          <ContactPage
            closeContactForm={closeContactForm}
            isModalOpen={isModalOpen}
          />
          <Header />
          <div className="app__content">
            <ContactList />
            <main className="app__wrapper">
              <Suspense fallback={<Preloader />}>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Home
                        openContactForm={openContactForm}
                        initialize={initialize}
                      />
                    }
                  />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/projects" element={<Projects />} />
                </Routes>
              </Suspense>
            </main>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
});

export default App;
