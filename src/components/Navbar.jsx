import React from "react";
import { FaDownload } from "react-icons/fa";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <a href="#home" className="hover:text-blue-500">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="hover:text-blue-500">
          About Me
        </a>
      </li>
      <li>
        <a href="#experiences" className="hover:text-blue-500">
          Experiences
        </a>
      </li>
      <li>
        <a href="#projects" className="hover:text-blue-500">
          Projects
        </a>
      </li>
      <li>
        <a href="#contacts" className="hover:text-blue-500">
          Contacts
        </a>
      </li>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="navbar px-4 sm:px-6 lg:px-8">
        {/* Left Section */}
        <div className="navbar-start">
          <a className="text-2xl font-bold text-blue-600 hover:text-blue-800">
            Atiqur R.
          </a>
        </div>

        {/* Center Section (Navigation Links) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-4 text-gray-700">{navOptions}</ul>
        </div>

        {/* Right Section (Resume Button) */}
        <div className="navbar-end">
          <a
            href="/atiqur-resume.pdf"
            download="Atiqur_Resume.pdf"
            className="btn btn-outline border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            Résumé <FaDownload className="ml-2" />
          </a>
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className="lg:hidden navbar-end">
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 mt-3 shadow bg-white rounded-box w-52 space-y-2"
            >
              {navOptions}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
