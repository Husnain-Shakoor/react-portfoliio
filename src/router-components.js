import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./app";
import About from "./pages/about";
import Contact from "./pages/Contact";
import MainHomepage from "./pages/mainHomepage";
import NavBar from "./pages/navbar";
import ServicesSection from "./pages/services-section";
const ReactRouterComponents = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<MainHomepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<ServicesSection />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ReactRouterComponents;
