import React from "react";

const educations = [
  {
    degree: "Master of Business Administration (EMBA)",
    institution: "University of Dhaka",
    duration: "2006 - 2008",
    description: [
      "Major in Banking.",
      "Completed a thesis on Bank Fund management.",
      "Achieved a CGPA of 3.59 out of 4.0.",
    ],
  },
  {
    degree: "Bachelor of Science in Mathematics",
    institution: "National University (Dhaka College)",
    duration: "2000 - 2004",
    description: [
      "Real Analysis.",
      "Linear Programming.",
      "Graduated with Second Class honors.",
    ],
  },
];

const Educations = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Education</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            A strong academic foundation has always been at the core of my
            professional journey. Here are the milestones of my educational
            background.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {edu.degree}
              </h3>
              <p className="text-gray-600 font-medium">{edu.institution}</p>
              <p className="text-gray-500 text-sm mb-4">{edu.duration}</p>
              <ul className="list-disc ml-5 text-gray-700">
                {edu.description.map((item, i) => (
                  <li key={i} className="mb-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Educations;
