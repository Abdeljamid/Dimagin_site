import React, { useState } from "react";

import { useDarkMode } from "../context/DarkModeContext";
import useClock from "../hooks/useClock";
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Facebook,
  Mail,
} from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Mail, href: "#" },
];

const NavBar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const currentTime = useClock();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      setIsMenuOpen(false); // Ferme le menu après le clic
    }
  };

  return (
    <header
      className={` top-0 left-0 w-full py-0  px-2 md:px-8 flex items-center justify-between z-50 transition-all duration-300 ${
        darkMode ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Logo + STUDIO */}
      <div className="flex items-center   font-bold">
        <a className="md:w-25 w-15 h-auto" href="/">
          <img
            src={
              darkMode
                ? "./documents/img/logo_dimagin_blanc_&_vert.png"
                : "./documents/img/logo_dimagin_noir_&_vert.png "
            }
            alt="Logo"
          />
        </a>
        <span className="text-thin">
          <hr />
        </span>
        <h1 className="text-xs font-thin md:text-xl">STUDIO</h1>
      </div>

      <div className="flex gap-3">
        <a className=" w-4 h-auto pt-1" href="/">
          <img
            src={
              darkMode
                ? "./documents/dimagin_files/linkedin-big-logo_white.png"
                : "./documents/dimagin_files/linkedin-big-logo.png "
            }
            alt="Logo"
          />
        </a>
        <a className=" w-5 h-auto" href="/">
          <img
            src={
              darkMode
                ? "./documents/dimagin_files/behance_white.png"
                : "./documents/dimagin_files/behance.png "
            }
            alt="Logo"
          />
        </a>
        <a className=" w-5 h-auto" href="/">
          <img
            src={
              darkMode
                ? "./documents/dimagin_files/dribbble-logo_white.png"
                : "./documents/dimagin_files/dribbble-logo.png "
            }
            alt="Logo"
          />
        </a>
      </div>

      {/* Heure + Mode sombre */}
      <div className="flex items-center gap-2">
        <span className="text-lg font-thin hidden md:block ">
          {currentTime}
        </span>
        <button onClick={toggleDarkMode} className="p-2 rounded-full">
          {darkMode ? (
            <img
              src="./documents/img/mode-claire2.png"
              alt="Mode clair"
              className="w-8 h-8"
            />
          ) : (
            <img
              src="./documents/img/mode-sombre.png"
              alt="Mode sombre"
              className="w-8 h-8"
            />
          )}
        </button>

        {/* Menu hamburger */}
        <button
          onClick={toggleMenu}
          className={`p-2 rounded-md transition-transform duration-300 ${
            isMenuOpen ? "rotate-90" : ""
          }`}
        >
          <div
            className={`w-6 md:w-20 h-[2px] ${
              darkMode ? "bg-white" : "bg-black"
            } transition-all duration-300`}
          ></div>
          <div
            className={`w-6 md:w-20 h-[2px] ${
              darkMode ? "bg-white" : "bg-black"
            } mt-3 transition-all`}
          ></div>
        </button>
      </div>

      {/* Fond semi-transparent pour fermer le menu en cliquant en dehors */}
      {isMenuOpen && (
        <div
          className="fixed inset-0"
          style={{
            backgroundColor: "rgba(31, 41, 55, 0.35)", // Gris foncé avec 60% de transparence
          }}
          onClick={toggleMenu} // Ferme le menu en cliquant à l'extérieur
        ></div>
      )}

      {/* Menu déroulant */}
      <div
        className={`fixed top-0 right-0 h-full  w-50 md:w-64 transform transition-transform duration-500 z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } ${darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-black"}`}
      >
        <div className="flex flex-col  items-center gap-2 mt-15 px-12 gap-2text-xl font-bold">
          <a className="w-30 h-auto" href="/">
            <img
              src={
                darkMode
                  ? "./documents/img/logo_dimagin_blanc_&_vert.png"
                  : "./documents/img/logo_dimagin_noir_&_vert.png"
              }
              alt="Logo"
            />
          </a>
          <span className="text-2xl">—</span>
          <h1>STUDIO</h1>
        </div>
        <ul className="flex flex-col space-y-6  md:text-lg p-4">
          {[
            { id: "HeroSection", label: "Accueil" },
            { id: "ExpertiseSection", label: "Expertise" },
            { id: "PortfolioGrid", label: "Portfolio" },
            { id: "Descriptif", label: "Descriptif" },
            { id: "TeamSection", label: "Team" },
            { id: "ValuesSection", label: "Nos Valeurs" },
            { id: "contact", label: "Contactez-Nous" },
          ].map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => {
                  scrollToSection(id);
                  toggleMenu(); // Fermer le menu après le clic
                }}
                className="hover:text-yellow-500"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex py-8 gap-4 w-full justify-center ">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className={`${
                darkMode
                  ? "text-gray-400 hover:text-yellow-500"
                  : "text-gray-600 hover:text-yellow-500"
              } text-2xl transition-colors`}
            >
              <social.icon />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
