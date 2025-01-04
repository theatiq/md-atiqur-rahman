import React from "react";
import atiqurImg from "../assets/atiqur.jpg";
import {
  FaDownload,
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

const Banner = () => {
  return (
    <div className="hero bg-gray-100 min-h-[500px] py-10">
      <div className="hero-content flex-col lg:flex-row-reverse items-center lg:items-start">
        {/* Profile Image */}
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <img
            src={atiqurImg}
            alt="Md. Atiqur Rahman"
            className="w-64 h-64 rounded-full shadow-lg object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="lg:w-2/3 text-center lg:text-left">
          <p className="text-xl font-medium text-gray-600">
            Hello! I’m Md. Atiqur Rahman
          </p>
          <h1 className="text-4xl font-bold text-gray-800">
            Front-end Developer
          </h1>
          <p className="py-6 text-gray-700 leading-relaxed">
            I specialize in building visually engaging, user-friendly websites
            with a focus on responsive design and seamless interactions. With a
            dedication to detail, I bring creative concepts to life and help
            brands achieve their digital goals. Let's work together to create
            impactful online experiences!
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center lg:justify-start gap-5 mb-6 text-3xl text-gray-600">
            <Link
              to="https://github.com/theatiq"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900"
            >
              <FaGithub />
            </Link>
            <Link
              to="https://www.linkedin.com/in/atiqurdottech/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900"
            >
              <FaLinkedin />
            </Link>
            <Link
              to="https://web.facebook.com/atiqur.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900"
            >
              <FaFacebook />
            </Link>
            <Link
              to="https://www.instagram.com/atiqur.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://www.youtube.com/@atiqur.tech."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900"
            >
              <FaYoutube />
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
            <div className="flex gap-4">
              <a
                href="tel:+8801677836566"
                className="btn btn-outline border-gray-600 text-gray-600 hover:bg-gray-800 hover:text-white text-xl flex items-center gap-2"
              >
                <FaPhone />
                Call Me
              </a>
              <a
                href="https://wa.me/+8801677836566"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-xl flex items-center gap-2"
              >
                <FaWhatsapp />
                WhatsApp
              </a>
            </div>
            <a
              href="/atiqur-resume.pdf"
              download="Atiqur_Resume.pdf"
              className="btn border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white text-xl flex items-center gap-2"
            >
              Résumé <FaDownload />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
