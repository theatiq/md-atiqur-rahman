import React from "react";
import workingImg from "/src/assets/working.avif";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="hero bg-base-200 min-h-[400px]">
      <div className="">
        {/* <h1 className="text-center">About Me</h1> */}
        <div className="hero-content flex-row">
          <div className="w-1/3">
            <img src={workingImg} className="max-w-sm rounded-lg shadow-2xl" />
          </div>
          <div className="w-2/3">
            <h1 className="text-5xl font-bold">About Me</h1>
            <p className="py-6">
              Hi, I'm Md. Atiqur Rahman, a passionate frontend developer with a
              love for creating visually appealing and user-friendly web
              experiences. With a strong foundation in HTML, CSS, JavaScript,
              React , nodejs , expressjs , mongodb , github , I specialize in
              building responsive websites that not only look great but also
              provide a seamless user experience. Over the years, I've honed my
              skills by working on a variety of projects, from simple landing
              pages to complex web applications. My goal is to turn creative
              ideas into functional, engaging digital products. When I'm not
              coding, I enjoy staying up-to-date with the latest web development
              trends and continuously learning new technologies to keep my
              skills sharp. Let's connect and create something amazing together!
            </p>
            <a href="#projects">
              <button className="btn btn-outline">View Projects</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
