import React from "react";
import companyImg from "/src/assets/sjibl.png";

const experiences = [
  {
    title: "Deputy Manager",
    company: "Shahjalal Islami Bank PLC, Cumilla Branch",
    duration: "April 2009 - May 2024",
    description: [
      "Monitoring Investment Portfolio of the Branch",
      "Monitoring All Branch Operational Activities",
      "Monitoring Stress Clients of the Branch",
    ],
  },
];

const Experiences = () => {
  return (
    <div className="experiences-section p-4">
      <h2 className="text-2xl font-bold mb-4">Experiences</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold">{exp.title}</h3>
          <div className="flex">
            <img className="w-5" src={companyImg} alt="" />
            <p className="text-sm text-gray-600">{exp.company}</p>
          </div>
          <p className="text-sm text-gray-600">{exp.duration}</p>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            {exp.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
