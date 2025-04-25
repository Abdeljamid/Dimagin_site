import React, { useEffect, useState } from "react";
import { X, ArrowRight, ArrowUpRight } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";

const MenuSection = ({
  currentSection,
  scrollToSection,
  toggleMenu,
  socialLinks,
}) => {
  const { darkMode } = useDarkMode();
  const [visibleBlocks, setVisibleBlocks] = useState([]);
  const [isDisappearing, setIsDisappearing] = useState(false);

  useEffect(() => {
    const indexes = Array.from({ length: 9 }, (_, i) => i);
    const randomized = indexes.sort(() => Math.random() - 0.5);

    randomized.forEach((i, index) => {
      setTimeout(() => {
        setVisibleBlocks((prev) => [...prev, i]);
      }, index * 150);
    });

    return () => setVisibleBlocks([]);
  }, []);

  const handleFadeOut = () => {
    setIsDisappearing(true);
    const indexes = Array.from({ length: 9 }, (_, i) => i);
    const randomized = indexes.sort(() => Math.random() - 0.5);

    randomized.forEach((i, index) => {
      setTimeout(() => {
        setVisibleBlocks((prev) => prev.filter((b) => b !== i));
      }, index * 100);
    });

    setTimeout(() => toggleMenu(), 1000);
  };

  const fadeClass = (index) =>
    `${
      visibleBlocks.includes(index) ? "opacity-100" : "opacity-0"
    } transition-opacity duration-500`;

  const bgColor = darkMode
    ? "bg-[#232323] text-white"
    : "bg-gray-300 text-black";
  const hoverColor = darkMode ? "hover:bg-black" : "hover:bg-gray-200";
  const borderColor = "border-[#2d2d2d]";

  return (
    <div className="inset-0 z-50 w-screen h-screen grid grid-rows-[1fr_2fr_2fr_1fr] grid-cols-2">
      <button
        onClick={() => {
          scrollToSection("HeroSection");
          handleFadeOut();
        }}
        className={`${fadeClass(
          0
        )} ${bgColor} ${hoverColor} border-r border-b ${borderColor} p-[35px] text-9xl text-start font-thin`}
      >
        DIMAGIN
      </button>

      <button
        onClick={handleFadeOut}
        className={`${fadeClass(
          1
        )} ${bgColor} ${hoverColor} border-r border-b ${borderColor} p-16 flex justify-end ${
          darkMode
            ? "text-gray-400 hover:text-gray-200"
            : "text-gray-400 hover:text-gray-700"
        }`}
        aria-label="Fermer le menu"
      >
        <X size={40} />
      </button>

      <button
        onClick={() => {
          scrollToSection("ExpertiseSection");
          handleFadeOut();
        }}
        className={`${fadeClass(
          2
        )} ${bgColor} ${hoverColor} border-r border-b ${borderColor} p-[35px] text-3xl font-thin text-start`}
      >
        Expertise
      </button>

      <div className="grid grid-cols-2">
        <button
          onClick={() => {
            scrollToSection("PortfolioGrid");
            handleFadeOut();
          }}
          className={`${fadeClass(
            3
          )} ${bgColor} ${hoverColor} border-r border-b ${borderColor} p-[35px] text-3xl font-thin text-start`}
        >
          Portfolio
        </button>

        <a
          href="mailto:start@dimagin.be"
          onClick={handleFadeOut}
          className={`${fadeClass(
            4
          )} ${bgColor} ${hoverColor} flex border-r border-b p-[35px] ${borderColor}`}
        >
          <span className="font-thin text-xl md:text-3xl">
            start@dimagin.be
          </span>
          <ArrowUpRight strokeWidth={0.5} className="ml-2" size={40} />
        </a>
      </div>

      <button
        onClick={() => {
          scrollToSection("TeamSection");
          handleFadeOut();
        }}
        className={`${fadeClass(
          5
        )} ${bgColor} ${hoverColor} border-r ${borderColor} p-[35px] text-3xl font-thin text-start`}
      >
        Notre équipe
      </button>

      <div className="grid grid-cols-2">
        <button
          onClick={() => {
            scrollToSection("ValuesSection");
            handleFadeOut();
          }}
          className={`${fadeClass(
            6
          )} ${bgColor} ${hoverColor} border-r  ${borderColor} p-[35px] text-3xl font-thin text-start`}
        >
          Nos valeurs
        </button>

        <button
          onClick={() => {
            scrollToSection("Footer");
            handleFadeOut();
          }}
          className={`${fadeClass(
            7
          )} ${bgColor} ${hoverColor} border-r  ${borderColor} p-[35px] text-xl text-end font-thin`}
        >
          Places des Arts 1, 4020 Liège
          <br />
          hello@dimagin.be
          <br />
          +32 (0)456 38 41 24
          <br />
          Dimagin SRL BE 0805 685 463
        </button>
      </div>

      <div
        className={`${fadeClass(
          8
        )} ${bgColor} ${hoverColor} border-r border-b border-t ${borderColor} col-span-2 flex items-center justify-between`}
      >
        <div>
          <button
            onClick={() => {
              scrollToSection("Footer");
              handleFadeOut();
            }}
            className="col-span-2 flex p-[35px] text-xl font-thin text-start"
          >
            Contactez-nous
          </button>
        </div>
        <div className="p-4 text-xl font-thin">
          <a href="#" className="p-4">
            Instagram
          </a>
          <span className="inline-block w-2 md:w-6 h-[0.2px] mb-1 bg-current" />
          <a href="#" className="p-4">
            Linkedin
          </a>
          <span className="inline-block w-2 md:w-6 h-[0.5px] mb-1 bg-current" />
          <a href="#" className="p-4">
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
