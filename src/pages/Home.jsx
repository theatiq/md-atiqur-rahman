import React from "react";
import Header from "../components/Header";
import AboutMe from "./AboutMe";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Educations from "./Educations";
import OtherSkills from "./OtherSkills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <AboutMe></AboutMe>
      <Experiences></Experiences>
      <Skills></Skills>
      {/* <Educations></Educations>
      <OtherSkills></OtherSkills>
      <Projects></Projects>
      <Contact></Contact> */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
