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
    </div>
  );
};

export default Home;
