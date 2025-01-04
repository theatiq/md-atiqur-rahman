import React from "react";
import htmlImg from "/src/assets/html.png";
import cssImg from "/src/assets/css.png";
import jsImg from "/src/assets/js.png";
import mongodbImg from "/src/assets/mongodb.png";
import firebaseImg from "/src/assets/firebase.png";
import nodeImg from "/src/assets/node.png";
import expressImg from "/src/assets/express.png";
import gitImg from "/src/assets/git.png";
import githubImg from "/src/assets/github.png";
import reactImg from "/src/assets/react.png";
import pythonImg from "/src/assets/python.png";
import reactRouterImg from "/src/assets/router.png";

const skillsData = [
  { src: htmlImg, alt: "HTML5", label: "HTML5" },
  { src: cssImg, alt: "CSS3", label: "CSS3" },
  { src: jsImg, alt: "JavaScript", label: "JavaScript" },
  { src: reactImg, alt: "React", label: "React.js" },
  { src: reactRouterImg, alt: "React Router", label: "React Router" },
  { src: nodeImg, alt: "Node.js", label: "Node.js" },
  { src: expressImg, alt: "Express.js", label: "Express.js" },
  { src: mongodbImg, alt: "MongoDB", label: "MongoDB" },
  { src: firebaseImg, alt: "Firebase", label: "Firebase" },
  { src: gitImg, alt: "Git", label: "Git" },
  { src: githubImg, alt: "GitHub", label: "GitHub" },
  { src: pythonImg, alt: "Python", label: "Python" },
];

const Skills = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Skill Set</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Proficient in HTML, CSS, JavaScript, and React.js, I specialize in
            building responsive and visually stunning web applications. With a
            strong foundation in modern development tools, I bring creative
            ideas to life with precision and expertise.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={skill.src}
                alt={skill.alt}
                className="w-16 h-16 mb-4 rounded-md"
              />
              <p className="text-gray-700 font-medium">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
