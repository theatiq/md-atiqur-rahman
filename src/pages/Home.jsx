import React from "react";
import Header from "../components/Header";
import AboutMe from "./AboutMe";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Educations from "./Educations";
import Projects from "./Projects";
import Footer from "../components/Footer";
import ContactPage from "./Contact";

const Home = () => {
  const scrollToHome = () => {
    const homeElement = document.getElementById("home");
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div id="home">
        <Header />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="experiences">
        <Experiences />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="educations">
        <Educations />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contacts">
        <ContactPage />
      </div>
      <Footer />
      {/* Sticky Button */}
      <button
        onClick={scrollToHome}
        className="fixed bottom-10 right-5 z-50 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700"
        aria-label="Scroll to Home"
      >
        ⬆️ Home
      </button>
    </div>
  );
};

export default Home;
