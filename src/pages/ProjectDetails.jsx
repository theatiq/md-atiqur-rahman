import React from "react";
import { useParams } from "react-router-dom"; // Assuming React Router is used

const projectDetails = {
  "inventory-management": {
    title: "Inventory Management System",
    description:
      "A complete solution for managing inventory levels, sales tracking, and purchase management. Features include user roles, real-time data visualization, and automated restocking alerts.",
    technologies: ["JavaScript", "Node.js", "MongoDB"],
    image: "/images/inventory-management.jpg",
    features: [
      "Real-time inventory tracking",
      "Automated purchase order generation",
      "Role-based access control",
    ],
  },
  "crazy-gamer": {
    title: "Crazy Gamer Review Site",
    description:
      "An interactive platform for gamers to rate and review their favorite games. Includes discussion forums, trending games, and personalized recommendations.",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    image: "/images/crazy-gamer.jpg",
    features: [
      "Dynamic review system",
      "Game discussion forums",
      "Personalized game recommendations",
    ],
  },
  "coupon-finder": {
    title: "Discount Coupon Finder",
    description:
      "A platform for discovering and sharing discount coupons from popular brands. Features include advanced search, user-submitted coupons, and admin moderation.",
    technologies: ["React", "Express.js", "MySQL"],
    image: "/images/coupon-finder.jpg",
    features: [
      "Searchable coupon database",
      "User submissions with moderation",
      "Brand and category filtering",
    ],
  },
};

const ProjectDetails = () => {
  const { projectId } = useParams(); // Extracting project ID from the URL
  const project = projectDetails[projectId];

  if (!project) {
    return <p>Project not found!</p>;
  }

  return (
    <div className="project-details-section p-4">
      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
      <img src={project.image} alt={project.title} className="w-full h-64 object-cover mb-6" />
      <p className="text-lg text-gray-700 mb-4">{project.description}</p>
      <p className="text-md text-gray-600 mb-4">
        <strong>Technologies:</strong> {project.technologies.join(", ")}
      </p>
      <h3 className="text-2xl font-semibold mb-3">Key Features:</h3>
      <ul className="list-disc ml-6 text-gray-700">
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetails;
