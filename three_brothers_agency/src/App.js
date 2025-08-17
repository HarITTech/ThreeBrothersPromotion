import React from "react";
// import './assests/font.css';
import './assests/font.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Strenths from "./pages/Strenths";
import bgImage from "./assests/bg_image_main.png"
import Testimonial from "./components/Testimonial";
import ScrollToTop from "./components/ScrollToTop"; // ✅ import here


function App() {
  return (
    <Router>
       {/* ✅ Add ScrollToTop here */}
      <ScrollToTop />
      <div className="flex flex-col h-screen overflow-y-auto no-scrollbar z min-h-screen w-full bg-cover bg-no-repeat bg-center overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}>
        {/* <div className="w-screen"> */}
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/our-work" element={<Strenths />} />
            <Route path="/testimonial" element={<Testimonial />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
