import React, { useEffect, useState } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";

const MenuSection = ({ toggleMenu }) => {
  const { darkMode } = useDarkMode();
  const [visibleBlocks, setVisibleBlocks] = useState([]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 50;
      const top = section.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

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

  const handleFadeOut = (callback) => {
    const indexes = Array.from({ length: 9 }, (_, i) => i);
    const randomized = indexes.sort(() => Math.random() - 0.5);

    randomized.forEach((i, index) => {
      setTimeout(() => {
        setVisibleBlocks((prev) => prev.filter((b) => b !== i));
      }, index * 100);
    });

    setTimeout(() => {
      toggleMenu();
      if (callback) callback();
    }, 1000);
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
    <div className="fixed inset-0 z-50 w-screen h-screen">
      {/* Desktop Version */}
      <div className="hidden lg:grid grid-cols-2 grid-rows-[1fr_2fr_2fr_1fr] w-full h-full">
        <button
          onClick={() => handleFadeOut(() => scrollToSection("HeroSection"))}
          className={`${fadeClass(
            0
          )} ${bgColor} ${hoverColor} border-b border-r ${borderColor} p-[35px] text-9xl font-thin text-start`}
        >
          DIMAGIN
        </button>
        <button
          onClick={() => handleFadeOut()}
          className={`${fadeClass(
            1
          )} ${bgColor} ${hoverColor} border-b border-r ${borderColor} p-16 flex justify-end`}
        >
          <X size={40} />
        </button>

        <button
          onClick={() =>
            handleFadeOut(() => scrollToSection("ExpertiseSection"))
          }
          className={`${fadeClass(
            2
          )} ${bgColor} ${hoverColor} border-b border-r ${borderColor} p-[35px] text-3xl font-thin text-start`}
        >
          Expertise
        </button>

        <div className="grid grid-cols-2">
          <button
            onClick={() =>
              handleFadeOut(() => scrollToSection("PortfolioGrid"))
            }
            className={`${fadeClass(
              3
            )} ${bgColor} ${hoverColor} border-b border-r ${borderColor} p-[35px] text-3xl font-thin text-start`}
          >
            Portfolio
          </button>
          <a
            href="mailto:start@dimagin.be"
            onClick={() => handleFadeOut()}
            className={`${fadeClass(
              4
            )} ${bgColor} ${hoverColor} border-b border-r ${borderColor} p-[35px] flex items-center`}
          >
            <span className="font-thin text-xl md:text-3xl">
              start@dimagin.be
            </span>
            <ArrowUpRight className="ml-2" size={30} />
          </a>
        </div>

        <button
          onClick={() => handleFadeOut(() => scrollToSection("TeamSection"))}
          className={`${fadeClass(
            5
          )} ${bgColor} ${hoverColor} border-r ${borderColor} p-[35px] text-3xl font-thin text-start`}
        >
          Notre équipe
        </button>

        <div className="grid grid-cols-2">
          <button
            onClick={() =>
              handleFadeOut(() => scrollToSection("ValuesSection"))
            }
            className={`${fadeClass(
              6
            )} ${bgColor} ${hoverColor}  border-r ${borderColor} p-[35px] text-3xl font-thin text-start`}
          >
            Nos valeurs
          </button>
          <button
            onClick={() => handleFadeOut(() => scrollToSection("contact"))}
            className={`${fadeClass(
              7
            )} ${bgColor} ${hoverColor}  border-r ${borderColor} p-[35px] text-xl text-end font-thin`}
          >
            Places des Arts 1<br />
            hello@dimagin.be
            <br />
            +32 456 38 41 24
            <br />
            Dimagin SRL BE 0805 685 463
          </button>
        </div>

        <div
          className={`${fadeClass(
            8
          )} ${bgColor} ${hoverColor} border-t border-r border-b ${borderColor} col-span-2 flex items-center justify-between p-[35px]`}
        >
          <button
            onClick={() => handleFadeOut(() => scrollToSection("contact"))}
            className="font-thin text-xl"
          >
            Contactez-nous
          </button>
          <div className="flex gap-2">
            <a href="#" className="font-thin">
              Instagram
            </a>
            <a href="#" className="font-thin">
              Linkedin
            </a>
            <a href="#" className="font-thin">
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div
        className={` text-start overflow-y-auto lg:hidden flex flex-col w-full h-full`}
      >
        <div className="flex">
          <button
            onClick={() => handleFadeOut(() => scrollToSection("HeroSection"))}
            className={`${fadeClass(
              0
            )} flex-1 border-b ${bgColor} ${borderColor} ${hoverColor} p-6 text-3xl text-start`}
          >
            DIMAGIN
          </button>

          <button
            onClick={() => handleFadeOut()}
            className={`${fadeClass(
              1
            )} flex-1 border-b ${bgColor} ${borderColor} ${hoverColor} p-6 text-3xl flex justify-end`}
          >
            <X size={36} />
          </button>
        </div>

        <button
          onClick={() =>
            handleFadeOut(() => scrollToSection("ExpertiseSection"))
          }
          className={`${fadeClass(
            2
          )} flex-1 border-b ${bgColor} ${borderColor} ${hoverColor} p-6 text-2xl text-start`}
        >
          Expertise
        </button>

        <button
          onClick={() => handleFadeOut(() => scrollToSection("PortfolioGrid"))}
          className={`${fadeClass(
            3
          )} flex-1 border-b ${bgColor} ${borderColor} ${hoverColor} p-6 text-2xl text-start`}
        >
          Portfolio
        </button>

        <a
          href="mailto:start@dimagin.be"
          onClick={handleFadeOut}
          className={`${fadeClass(
            4
          )} flex-1 border-b ${bgColor} ${borderColor} ${hoverColor} p-6 text-2xl flex items-center`}
        >
          start@dimagin.be
          <ArrowUpRight size={28} />
        </a>

        <button
          onClick={() => handleFadeOut(() => scrollToSection("TeamSection"))}
          className={`${fadeClass(
            5
          )} flex-1 border-b ${bgColor} ${borderColor} ${hoverColor} p-6 text-2xl text-start`}
        >
          Notre équipe
        </button>

        <button
          onClick={() => handleFadeOut(() => scrollToSection("ValuesSection"))}
          className={`${fadeClass(
            6
          )} flex-1 border-b ${bgColor} ${borderColor} ${hoverColor} p-6 text-2xl text-start`}
        >
          Nos valeurs
        </button>

        {/* Bloc 8 : Contact & Social */}
        <div
          className={`${fadeClass(
            7
          )} flex-1 flex flex-col justify-center items-center ${borderColor} ${bgColor} ${hoverColor} p-6 text-xl`}
        >
          <button
            onClick={() => handleFadeOut(() => scrollToSection("contact"))}
            className="text-2xl"
          >
            Contactez-nous
          </button>
          <div className="flex gap-6 text-base mt-2">
            <a href="#">Instagram</a>
            <a href="#">Linkedin</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
