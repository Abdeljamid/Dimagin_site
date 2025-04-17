import React, { useState, useEffect } from "react";
import MenuSection from "./MenuSection";
import { useDarkMode } from "../context/DarkModeContext";
import useClock from "../hooks/useClock";
import ErrorBoundary from "./ErrorBoundary";

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
  const [currentSection, setCurrentSection] = useState(null);
  const [showMenu, setShowMenu] = useState(false); // Pour gérer la transition

  const toggleMenu = () => {
    if (!showMenu) {
      setShowMenu(true);
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
      setTimeout(() => setShowMenu(false), 300); // attendre que l'anim se termine
    }
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(id);
      toggleMenu();
    }
  };

  return (
    <header
      className={`top-0 left-0 w-full py-0 p-4 flex items-center justify-between z-50 transition-all duration-300 ${
        darkMode ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Logo + STUDIO */}
      <div className="flex items-center gap-2 font-bold">
        <a className="md:w-25 w-10 h-auto" href="/">
          <img
            src={
              darkMode
                ? "/img/logo_dimagin_blanc_&_vert.png"
                : "/img/logo_dimagin_noir_&_vert.png "
            }
            alt="Logo"
          />
        </a>
        <span
          className={`w-2 md:w-6 h-[0.1px] ${
            darkMode ? "bg-white" : "bg-gray-700"
          } transition-all duration-300`}
        />
        <h1 className="text-xs font-thin md:text-xl">STUDIO</h1>
      </div>

      {/* Réseaux sociaux */}
      <div className="flex gap-3">
        <a className="w-4 h-auto" href="/">
          <img
            src={
              darkMode
                ? "/dimagin_files/linkedin-big-logo_white.png"
                : "/dimagin_files/linkedin-big-logo.png "
            }
            alt="Logo"
          />
        </a>
        <a className="w-5 h-auto" href="/">
          <img
            src={
              darkMode
                ? "/dimagin_files/behance_white.png"
                : "/dimagin_files/behance.png "
            }
            alt="Logo"
          />
        </a>
        <a className="w-5 h-auto" href="/">
          <img
            src={
              darkMode
                ? "/dimagin_files/dribbble-logo_white.png"
                : "/dimagin_files/dribbble-logo.png "
            }
            alt="Logo"
          />
        </a>
      </div>

      {/* Heure + boutons */}
      <div className="flex items-center gap-2">
        <span className="text-lg font-thin hidden md:block">{currentTime}</span>
        <button onClick={toggleDarkMode} className="p-2 rounded-full">
          {darkMode ? (
            <img
              src="/img/mode-claire2.png"
              alt="Mode clair"
              className="w-4 h-4 md:w-8 md:h-8"
            />
          ) : (
            <img
              src="/img/mode-sombre.png"
              alt="Mode sombre"
              className="w-4 h-4 md:w-8 md:h-8"
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
            className={`w-6 h-[0.5px] md:w-20 md:h-[2px] ${
              darkMode ? "bg-white" : "bg-black"
            } transition-all duration-300`}
          ></div>
          <div
            className={`w-6 h-[0.5px] md:w-20 md:h-[2px] mt-1 md:mt-3 ${
              darkMode ? "bg-white" : "bg-black"
            } transition-all`}
          ></div>
        </button>
      </div>

      {/* menu */}
      {showMenu && (
        <div
          className={`fixed inset-0 z-40 transition-opacity  duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <ErrorBoundary>
            <MenuSection
              toggleMenu={toggleMenu}
              scrollToSection={scrollToSection}
              currentSection={currentSection}
              socialLinks={socialLinks}
            />
          </ErrorBoundary>
        </div>
      )}
    </header>
  );
};

export default NavBar;
