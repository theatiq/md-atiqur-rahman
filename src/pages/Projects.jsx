import React from "react";

const projects = [
  {
    title: "Inventory Management System",
    description:
      "A comprehensive system for managing stock levels, sales, and purchases.",
    technologies: ["JavaScript", "Node.js", "MongoDB"],
    image: "/images/inventory-management.jpg", // Replace with the actual image path
    detailsLink: "/projects/inventory-management", // Replace with the route for details
  },
  {
    title: "Crazy Gamer Review Site",
    description:
      "A platform where gamers can review and rate their favorite games.",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    image: "/images/crazy-gamer.jpg", // Replace with the actual image path
    detailsLink: "/projects/crazy-gamer", // Replace with the route for details
  },
  {
    title: "Discount Coupon Finder",
    description:
      "A web application to discover and share discount coupons from popular brands.",
    technologies: ["React", "Express.js", "MySQL"],
    image: "/images/coupon-finder.jpg", // Replace with the actual image path
    detailsLink: "/projects/coupon-finder", // Replace with the route for details
  },
];

const Projects = () => {
  return (
    <div className="projects-section p-4">
      <h2 className="text-2xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-700 mb-4">
                {project.description}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>
              <a
                href={project.detailsLink}
                className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
