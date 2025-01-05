import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import blogImg from "../assets/blog.png";
import gamerImg from "../assets/gamer.png";
import discountImg from "../assets/discount.png";

const projectDetails = {
  "inventory-management": {
    title: "Tech Blog Site",
    description:
      "A dynamic platform tailored for technology enthusiasts to explore, share, and engage with in-depth tech insights.",
    technologies: ["JavaScript", "Node.js", "MongoDB", "Firebase", "React"],
    image: "https://i.ibb.co.com/p1nwNcz/blog.webp",
    features: [
      "Comprehensive Tech Blog: Users can access detailed blog and comment for a variety of blogs across different genres and publishing years.",
      "User-Generated Content: Registered users can contribute by adding their own blogs and sharing opinions.",
      "Blog Wishlist: Users can create and manage personalized wishlists for which they want to keep track of.",
      "Intuitive Navigation: A responsive and visually appealing design ensures easy browsing on both desktop and mobile devices.",
      "Community Engagement: Features like user profiles and tooltips promote interaction and engagement within the tech blog community.",
    ],
  },
  "crazy-gamer": {
    title: "Crazy Gamer Review Site",
    description:
      "An interactive platform for gamers to rate and review their favorite games. Includes discussion forums, trending games, and personalized recommendations.",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    image: "https://i.ibb.co.com/gTgpmPd/gamer.jpg",
    features: [
      "Comprehensive Game Reviews: Users can access detailed reviews and ratings for a variety of games across different genres and publishing years.",
      "User-Generated Content: Registered users can contribute by adding their own reviews, sharing opinions, and rating games.",
      "Game Watchlist: Users can create and manage personalized watchlists for games they want to keep track of.",
      "Intuitive Navigation: A responsive and visually appealing design ensures easy browsing on both desktop and mobile devices.",
      "Community Engagement: Features like user profiles and tooltips promote interaction and engagement within the gaming community.",
    ],
  },
  "coupon-finder": {
    title: "Discount Coupon Finder",
    description:
      "A platform for discovering and sharing discount coupons from popular brands. Features include advanced search, user-submitted coupons, and admin moderation.",
    technologies: ["React", "Firebase", "Tailwind"],
    image: "https://i.ibb.co.com/G0Vky5W/discount.jpg",
    features: [
      "You can Find all available coupons in Bangladesh.",
      "You can get a variety of the latest products.",
      "You can experience a smooth Single Page functionality.",
      "Fully functional email-password login and Google login system incorporated.",
    ],
  },
};

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectDetails[projectId];
  const navigate = useNavigate();

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-bold text-red-500">Project not found!</p>
      </div>
    );
  }

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Uncomment Navbar if needed */}
      {/* <Navbar /> */}
      <div className="project-details-section flex-grow p-4 md:p-10">
        <h2 className="text-3xl font-bold mb-6 text-center">{project.title}</h2>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[300px] md:h-[500px] object-cover mb-6 rounded-lg shadow-md"
        />
        <p className="text-lg text-gray-700 mb-4">{project.description}</p>
        <p className="text-md text-gray-600 mb-4">
          <strong>Technologies:</strong> {project.technologies.join(", ")}
        </p>
        <h3 className="text-2xl font-semibold mb-3">Key Features:</h3>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="mt-6 text-center">
          <button onClick={handleBack} className="btn btn-outline">
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
