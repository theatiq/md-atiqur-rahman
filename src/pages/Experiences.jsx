import React from "react";
import companyImg from "/src/assets/sjibl.png";

const experiences = [
  {
    title: "Deputy Manager",
    company: "Shahjalal Islami Bank PLC, Cumilla Branch",
    duration: "April 2009 - May 2024",
    description: [
      "Monitoring Investment Portfolio of the Branch.",
      "Overseeing all operational activities within the branch.",
      "Managing and supporting stress clients to improve retention.",
    ],
  },
];

const Experiences = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Experiences
        </h2>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {exp.title}
            </h3>
            <div className="flex items-center gap-3 mb-2">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={companyImg}
                alt={exp.company}
              />
              <p className="text-gray-700 font-medium">{exp.company}</p>
            </div>
            <p className="text-gray-600 text-sm mb-4">{exp.duration}</p>
            <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
              {exp.description.map((item, i) => (
                <li key={i} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
