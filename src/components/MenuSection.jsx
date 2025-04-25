import React from "react";
import { X, ArrowRight, ArrowUpRight } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";

const MenuSection = ({
  currentSection,
  scrollToSection,
  toggleMenu,
  socialLinks,
}) => {
  const { darkMode } = useDarkMode();

  // Liste des liens
  const menuLinks = [
    { id: "HeroSection" },
    { id: "ExpertiseSection", label: "Expertise" },
    { id: "PortfolioGrid", label: "Portfolio" },
    { id: "Descriptif", label: "Descriptif" },
    { id: "TeamSection", label: "Team" },
    { id: "ValuesSection", label: "Nos Valeurs" },
    { id: "Footer", label: "Contactez-Nous" },
  ];
  return (
    <div className="fixed inset-0 z-50 bg-[#232323] text-white w-screen h-screen grid grid-rows-4 grid-cols-2">
      {/* Bloc 1 */}
      {/* bloc1.1 */}
      <button
        onClick={() => {
          scrollToSection("HeroSection");
          toggleMenu();
        }}
        className="hover:bg-black transition-colors duration-200  border-r border-b border-[#2d2d2d] border-t-0 border-l-0  p-[35px] text-9xl text-start font-thin"
      >
        DIMAGIN
      </button>
      {/* bloc1.2 */}
      <button
        onClick={toggleMenu}
        className={` border-r border-b border-[#2d2d2d] border-t-0 border-l-0  hover:bg-black transition-colors duration-200   p-16 flex justify-end  ${
          darkMode
            ? "text-gray-400 hover:text-gray-200"
            : "text-gray-400 hover:text-gray-700"
        }`}
        aria-label="Fermer le menu"
      >
        <X size={40} />
      </button>

      {/* Bloc 2 */}
      {/* Bloc 2.1 */}
      <button
        onClick={() => {
          scrollToSection("ExpertiseSection");
          toggleMenu();
        }}
        className=" hover:bg-black transition-colors duration-200 border-r border-b border-[#2d2d2d] border-t-0 border-l-0     p-[35px] text-3xl font-thin text-start"
      >
        Expertise
      </button>
      {/* Bloc 2.2 */}
      <div className="grid grid-cols-2">
        {/* Bloc 2.2.1 */}
        <button
          onClick={() => {
            scrollToSection("PortfolioGrid");
            toggleMenu();
          }}
          className=" hover:bg-black transition-colors duration-200 border-r border-b border-[#2d2d2d] border-t-0 border-l-0     p-[35px] text-3xl font-thin text-start"
        >
          Portfolio
        </button>
        {/* Bloc 2.2.2 */}
        <a
          href="mailto:start@dimagin.be"
          className="hover:bg-black transition-colors duration-200 flex border-r border-b p-[35px] border-[#2d2d2d] border-t-0 border-l-0  font"
        >
          <span className="font-thin text-xl md:text-3xl">
            start@dimagin.be
          </span>
          <ArrowUpRight strokeWidth={0.5} className=" " size={40} />
        </a>
      </div>

      {/* Bloc 3 */}
      {/* Bloc 3.1 */}
      <button
        onClick={() => {
          scrollToSection("TeamSection");
          toggleMenu();
        }}
        className="hover:bg-black transition-colors duration-200  border-r border-b border-[#2d2d2d] border-t-0 border-l-0  p-[35px] text-3xl font-thin text-start"
      >
        Notre équipe
      </button>
      {/* Bloc 3.2 */}
      <div className="grid grid-cols-2">
        {/* Bloc 3.2.1 */}
        <button
          onClick={() => {
            scrollToSection("ValuesSection");
            toggleMenu();
          }}
          className="hover:bg-black transition-colors duration-200  border-r border-b border-[#2d2d2d] border-t-0 border-l-0     p-[35px] text-3xl text-start font-thin "
        >
          Nos valeurs
        </button>
        {/* Bloc 3.2.2 */}
        <button
          onClick={() => {
            scrollToSection("Footer");
            toggleMenu();
          }}
          className="hover:bg-black transition-colors duration-200 border-r border-b border-[#2d2d2d] border-t-0 border-l-0  p-[35px] text-xl text-end font-thin"
        >
          Places des Arts 1, 4020 Liège
          <br /> hello@dimagin.be <br /> +32 (0)456 38 41 24
          <br />
          Dimagin SRL BE 0805 685 463
        </button>
      </div>

      {/* Bloc 4 */}
      <div className=" border-r border-b border-[#2d2d2d] border-t-0 border-l-0 col-span-2 hover:bg-black flex items-center justify-between  ">
        {/* contact */}
        <div>
          <button
            onClick={() => {
              scrollToSection("Footer");
              toggleMenu();
            }}
            className=" col-span-2 flex  p-[35px] text-xl font-thin text-start"
          >
            Contactez-nous
          </button>
        </div>
        {/* réseaux */}
        <div className="p-4  text-xl font-thin  ">
          <a href="" className=" p-4">
            Instagram
          </a>
          <span
            className={`inline-block w-2 md:w-6 h-[0.2px] mb-1 bg-white transition-all duration-300`}
          />
          <a href="" className="p-4 ">
            Linkedin
          </a>{" "}
          <span
            className={`inline-block w-2 md:w-6 h-[0.5px] mb-1 bg-white transition-all duration-300`}
          />
          <a href="" className=" p-4">
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
