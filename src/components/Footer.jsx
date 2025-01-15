import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Info Section */}
        <div>
          <h6 className="text-lg font-bold mb-4">Contact Info</h6>
          <p className="mb-2">
            <FaEnvelope className="inline mr-2" /> Email:{" "}
            <a
              href="mailto:theatiq@gmail.com"
              className="hover:underline text-blue-400"
            >
              theatiq@gmail.com
            </a>
          </p>
          <p className="mb-2">
            <FaPhone className="inline mr-2" /> Phone:{" "}
            <a href="tel:+8801677836566" className="hover:underline">
              +8801677836566
            </a>
          </p>
          <p className="mb-2">
            <FaWhatsapp className="inline mr-2" /> WhatsApp:{" "}
            <a href="https://wa.me/8801677836566" className="hover:underline">
              +8801677836566
            </a>
          </p>
          <p>
            Location: Cumilla, Bangladesh
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h6 className="text-lg font-bold mb-4">Quick Links</h6>
          <nav className="flex flex-col space-y-2">
            <a href="#about" className="hover:text-blue-400">
              About Me
            </a>
            <a href="#contacts" className="hover:text-blue-400">
              Contacts
            </a>
            <a href="#experiences" className="hover:text-blue-400">
              Experiences
            </a>
            <a href="#projects" className="hover:text-blue-400">
              Projects
            </a>
          </nav>
        </div>

        {/* Social Links Section */}
        <div>
          <h6 className="text-lg font-bold mb-4">Follow Me</h6>
          <div className="flex gap-6 text-2xl">
            <Link
              to="https://github.com/theatiq"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaGithub />
            </Link>
            <Link
              to="https://www.linkedin.com/in/atiqurdottech/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedin />
            </Link>
            <Link
              to="https://web.facebook.com/atiqur.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaFacebook />
            </Link>
            <Link
              to="https://www.instagram.com/atiqur.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://www.youtube.com/@atiqur.tech."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 text-sm">
        &copy; {new Date().getFullYear()} Atiqur. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
