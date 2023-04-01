import { FC, useCallback, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer/Footer";

const App: FC = () => {
  const { pathname } = useLocation();
  return (
    <div className="w-full bg-islas bg-cover bg-center bg-no-repeat bg-fixed">
      <div className={`backdrop-blur-sm w-screen h-full md:h-screen lg:h-full xl:h-full 2xl:h-screen ${
        pathname !== "/" ? "bg-black/20" : "bg-black/95"
      }`}>
        {pathname !== "/" && <Navbar />}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        {pathname !== "/" && <Footer />}
      </div>
    </div>
      
  );
};

export default App;
