// {
//   "hosting": {
//     "public": "dist",
//     "ignore": [
//       "firebase.json",
//       "**/.*",
//       "**/node_modules/**"
//     ],
//     "rewrites": [
//       {
//         "source": "**",
//         "destination": "/index.html"
//       }
//     ]
//   }
// }






import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        formData,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          setStatusMessage("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatusMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-page flex flex-wrap min-h-screen">
      {/* Left Side */}
      <div className="w-full md:w-1/2 p-4 flex items-center justify-center bg-gray-100">
        <img
          src="/images/contact-us.jpg" // Replace with your contact image path
          alt="Contact Us"
          className="w-full h-auto max-w-md rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6"
        >
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
              placeholder="Your Email"
            />
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </div>

          {/* Status Message */}
          {statusMessage && (
            <p className="text-sm text-center text-green-600">{statusMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

// export default ContactPage;


{projects.map((project, index) => (
  // <div
  //   key={index}
  //   className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
  // >
  //   {/* Project Image */}
  //   <img
  //     src={project.image}
  //     alt={project.title}
  //     className="w-full h-48 object-cover rounded-t-lg"
  //   />
  //   {/* Project Info */}
  //   <div className="p-6">
  //     <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
  //     <p className="text-gray-600 mb-4">{project.description}</p>
  //     <p className="text-sm text-gray-500 mb-4">
  //       <strong>Technologies:</strong>{" "}
  //       {project.technologies.join(", ")}
  //     </p>
  //     <div className="flex flex-wrap gap-4">
  //       {project.liveLink && (
  //         <a
  //           href={project.liveLink}
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           className="text-blue-500 hover:underline"
  //         >
  //           Live Site
  //         </a>
  //       )}
  //       {project.serverSide && (
  //         <a
  //           href={project.serverSide}
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           className="text-blue-500 hover:underline"
  //         >
  //           Server Code
  //         </a>
  //       )}
  //       {project.clientSide && (
  //         <a
  //           href={project.clientSide}
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           className="text-blue-500 hover:underline"
  //         >
  //           Client Code
  //         </a>
  //       )}
  //     </div>
  //     {/* Update the details link to use Link from React Router */}
  //     <NavLink
  //       to={project.detailsLink} // Use the Link component here
  //       className="inline-block mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
  //     >
  //       View Details
  //     </NavLink>
  //   </div>
  // </div>
))}