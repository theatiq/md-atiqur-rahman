import React from "react";
import atiqurImg from "../assets/atiqur.jpg";
import {
  FaDownload,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[500px]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-1/3">
          <img src={atiqurImg} className="max-w-sm rounded-full shadow-2xl" />
        </div>
        <div className="w-2/3">
          <p className="text-2xl font-semibold">Hi I'm Md. Atiqur Rahman</p>
          <h1 className="text-4xl font-bold">Frontend Web Developer</h1>
          <p className="py-6">
            with a passion for crafting intuitive and visually appealing
            websites.From responsive design to smooth user interactions, I focus
            on every detail.Let's collaborate to bring your vision to
            life.Explore my portfolio and see how I can help you achieve your
            goals.
          </p>
          <div className="flex gap-8 mb-5 text-3xl">
            <Link
              to={"https://github.com/theatiq"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/atiqurdottech/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </Link>
            <Link
              to={"https://web.facebook.com/atiqur.tech"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </Link>
            <Link
              to={"https://www.instagram.com/atiqur.tech/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </Link>
            <Link
              to={"https://www.youtube.com/@atiqur.tech."}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </Link>
          </div>
          <div className="flex gap-2">
            {/* <button className="btn btn-primary">Get Started</button> */}
            {/* <a className="btn btn-outline text-xl">Caontact Me</a> */}
            <div className="flex gap-4">
              <a href="tel:+8801677836566" className="btn btn-outline text-xl">
                Call Me
              </a>
              <a
                href="https://wa.me/01677836566"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline text-xl"
              >
                WhatsApp Me
              </a>
            </div>

            <a
              href="/atiqur-resume.pdf"
              download="Atiqur_Resume.pdf"
              className="btn mr-3 text-xl btn-outline"
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
