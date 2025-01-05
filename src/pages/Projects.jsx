import React from "react";
import { Link, NavLink } from "react-router-dom"; // Import Link from react-router-dom
import blogImg from "../assets/blog.png";
import gamerImg from "../assets/gamer.png";
import discountImg from "../assets/discount.png";

const Projects = () => {
  return (
    <div className="projects-section bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project-1 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            {/* Project Image */}
            <img
              src={blogImg}
              alt=""
              className="w-full h-48 object-cover rounded-t-lg"
            />
            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Tech Blog Site</h3>
              <p className="text-gray-600 mb-4">
                A dynamic platform tailored for technology enthusiasts to
                explore.
              </p>
              <p className="text-sm text-gray-500 mb-4">
                <strong>Technologies:</strong> "JavaScript", "Node.js",
                "MongoDB", "React"
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://atiqurstech.firebaseapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Live Site
                </a>

                <a
                  href="https://github.com/programming-hero-web-course2/b10a11-server-side-theatiq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Server Code
                </a>
                <a
                  href="https://github.com/programming-hero-web-course2/b10a11-client-side-theatiq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Client Code
                </a>
              </div>
              {/* Update the details link to use Link from React Router */}
              <NavLink
                to={"/projects/inventory-management"} // Use the Link component here
                className="inline-block mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                View Details
              </NavLink>
            </div>
          </div>
          {/* Project-2 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            {/* Project Image */}
            <img
              src={gamerImg}
              alt=""
              className="w-full h-48 object-cover rounded-t-lg"
            />
            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">
                Crazy Gamer Review Site
              </h3>
              <p className="text-gray-600 mb-4">
                A platform where gamers can review and rate their favorite
                games.
              </p>
              <p className="text-sm text-gray-500 mb-4">
                <strong>Technologies:</strong> "JavaScript", "Node.js",
                "MongoDB", "React"
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://game-master-atiqur.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Live Site
                </a>

                <a
                  href="https://github.com/programming-hero-web-course2/b10-a10-server-side-theatiq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Server Code
                </a>
                <a
                  href="https://github.com/programming-hero-web-course2/b10-a10-client-side-theatiq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Client Code
                </a>
              </div>
              {/* Update the details link to use Link from React Router */}
              <NavLink
                to={"/projects/crazy-gamer"} // Use the Link component here
                className="inline-block mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                View Details
              </NavLink>
            </div>
          </div>
          {/* Project-3 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            {/* Project Image */}
            <img
              src={discountImg}
              alt=""
              className="w-full h-48 object-cover rounded-t-lg"
            />
            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">
                Discount Coupon Finder
              </h3>
              <p className="text-gray-600 mb-4">
                A web application to discover and share discount coupons.
              </p>
              <p className="text-sm text-gray-500 mb-4">
                <strong>Technologies:</strong> "JavaScript", "Node.js",
                "MongoDB", "React"
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://discount-pro-atiqur.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Live Site
                </a>

                {/* <a
                  href="https://github.com/programming-hero-web-course2/b10a11-server-side-theatiq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Server Code
                </a> */}
                <a
                  href="https://github.com/programming-hero-web-course1/b10-a9-authentication-theatiq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Client Code
                </a>
              </div>
              {/* Update the details link to use Link from React Router */}
              <NavLink
                to={"/projects/coupon-finder"} // Use the Link component here
                className="inline-block mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                View Details
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
