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
    <div className="w-full">
      {pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      {pathname !== "/" && <Footer />}
    </div>
      
  );
};

export default App;
