import React from "react";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Skills from "./components/Skills";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900">
      {/* Decorative global background */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-radial-spots"
      ></div>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20 bg-dot-grid"
      ></div>

      <Navbar />
      <main id="main-content" className="flex-grow">
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
