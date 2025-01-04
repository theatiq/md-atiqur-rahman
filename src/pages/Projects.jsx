import React from "react";

const projects = [
  {
    title: "Tech Blog Site",
    description:
      "A dynamic platform tailored for technology enthusiasts to explore.",
    technologies: ["JavaScript", "Node.js", "MongoDB", "React"],
    image: "/src/assets/blog.png",
    detailsLink: "/projects/inventory-management",
    liveLink: "https://atiqurstech.firebaseapp.com/",
    serverSide:
      "https://github.com/programming-hero-web-course2/b10a11-server-side-theatiq",
    clientSide:
      "https://github.com/programming-hero-web-course2/b10a11-client-side-theatiq",
  },
  {
    title: "Crazy Gamer Review Site",
    description:
      "A platform where gamers can review and rate their favorite games.",
    technologies: ["React", "Tailwind CSS", "Firebase", "JavaScript"],
    image: "/src/assets/gamer.png",
    detailsLink: "/projects/crazy-gamer",
    liveLink: "https://game-master-atiqur.web.app/",
    serverSide:
      "https://github.com/programming-hero-web-course2/b10-a10-server-side-theatiq",
    clientSide:
      "https://github.com/programming-hero-web-course2/b10-a10-client-side-theatiq",
  },
  {
    title: "Discount Coupon Finder",
    description:
      "A web application to discover and share discount coupons from popular brands.",
    technologies: ["React", "Firebase", "Tailwind", "JavaScript"],
    image: "/src/assets/discount.png",
    detailsLink: "/projects/coupon-finder",
    liveLink: "https://discount-pro-atiqur.web.app/",
    serverSide: "",
    clientSide:
      "https://github.com/programming-hero-web-course1/b10-a9-authentication-theatiq",
  },
];

const Projects = () => {
  return (
    <div className="projects-section bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-sm text-gray-500 mb-4">
                  <strong>Technologies:</strong>{" "}
                  {project.technologies.join(", ")}
                </p>
                <div className="flex flex-wrap gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Live Site
                    </a>
                  )}
                  {project.serverSide && (
                    <a
                      href={project.serverSide}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Server Code
                    </a>
                  )}
                  {project.clientSide && (
                    <a
                      href={project.clientSide}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Client Code
                    </a>
                  )}
                </div>
                <a
                  href={project.detailsLink}
                  className="inline-block mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
