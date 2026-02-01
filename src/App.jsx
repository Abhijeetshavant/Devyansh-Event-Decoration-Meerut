import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import MainHero from "./pages/MainHero";
import About from "./pages/About";
import NavAbout from "./pages/NavAbout";
import Card from "./pages/Card";

import Services from "./pages/Services";
import Footer from "./pages/Footer";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={
              <div>
                <Navbar />
                <Hero />
                <MainHero />
                <About />
                <Card />
                <Footer />
              </div>
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<NavAbout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
