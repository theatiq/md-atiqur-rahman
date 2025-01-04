import React from "react";
import workingImg from "/src/assets/working.avif";

const AboutMe = () => {
  return (
    <div className="hero bg-gray-100 py-10">
      <div className="hero-content flex-col lg:flex-row items-center lg:items-start">
        {/* Image Section */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0 flex justify-center">
          <img
            src={workingImg}
            alt="Working"
            className="w-64 h-64 lg:w-auto lg:h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
          <p className="py-6 text-gray-700 leading-relaxed">
            Hi, I'm <strong>Md. Atiqur Rahman</strong>, a passionate frontend
            developer with a love for creating visually appealing and
            user-friendly web experiences. I specialize in building responsive
            websites using modern tools and technologies like{" "}
            <strong>HTML</strong>, <strong>CSS</strong>,{" "}
            <strong>JavaScript</strong>, <strong>React</strong>,
            <strong>Node.js</strong>, <strong>Express.js</strong>,{" "}
            <strong>MongoDB</strong>, and <strong>GitHub</strong>.
          </p>
          <p className="pb-6 text-gray-700 leading-relaxed">
            My expertise ranges from crafting elegant landing pages to
            developing complex web applications. I am committed to turning
            creative ideas into engaging digital products. Beyond coding, I
            enjoy staying updated with the latest industry trends and
            continuously expanding my technical skill set.
          </p>
          <div className="flex justify-center lg:justify-start">
            <a href="#projects">
              <button className="btn btn-outline border-gray-600 text-gray-600 hover:bg-gray-800 hover:text-white">
                View Projects
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
