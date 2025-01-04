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
      "Real Analysis",
      "Linear Programming",
      "Graduated with Second Class honors.",
    ],
  },
];

const Educations = () => {
  return (
    <div className="education-section p-4">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      {educations.map((edu, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold">{edu.degree}</h3>
          <p className="text-sm text-gray-600">{edu.institution}</p>
          <p className="text-sm text-gray-600">{edu.duration}</p>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            {edu.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Educations;
