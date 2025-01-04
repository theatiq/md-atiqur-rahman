import React from "react";
import { FaDownload } from "react-icons/fa";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About Me</a>
      </li>
      <li>
        <a href="#experiences">Experiences</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contacts">Contacts</a>
      </li>
    </>
  );

  return (
    <div className="fixed top-0 left-0 z-50 w-full navbar bg-slate-400">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl font-bold">Atiqur R.</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="/atiqur-resume.pdf"
          download="Atiqur_Resume.pdf"
          className="btn mr-3 text-xl btn-outline"
        >
          Résumé <FaDownload />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
