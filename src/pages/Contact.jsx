import React, { useState } from "react";
import emailjs from "emailjs-com";
import contactImg from "/src/assets/contact.jpg";

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
        import.meta.env.VITE_SERVICE_ID, // Replace with your EmailJS Service ID
        import.meta.env.VITE_TEMPLATE_ID, // Replace with your EmailJS Template ID
        formData,
        import.meta.env.VITE_PUBLIC_KEY // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatusMessage("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatusMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-page flex flex-wrap min-h-screen bg-gray-50">
      {/* Left Side: Image Section */}
      <div className="w-full md:w-1/2 p-6 flex items-center justify-center bg-gray-100">
        <img
          src={contactImg} // Replace with your contact image path
          alt="Contact Us"
          className="w-full h-auto max-w-md rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side: Contact Form */}
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white shadow-md rounded-lg p-6"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Contact Us
          </h2>

          {/* Name Input */}
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Name"
            />
          </div>

          {/* Email Input */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Email"
            />
          </div>

          {/* Message Input */}
          <div className="mb-5">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>

          {/* Status Message */}
          {statusMessage && (
            <p
              className={`text-center text-sm ${
                statusMessage.includes("successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
