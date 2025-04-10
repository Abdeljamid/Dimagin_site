import { useState, useEffect } from "react";

import { ArrowUpRight } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";
import VideoSection from "../components/VideoSection"; // adapte le chemin si besoin

const HeroSection = () => {
  const { darkMode } = useDarkMode();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Si la largeur est inférieure à 768px, c'est un mobile
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize); // Ajoute un écouteur d'événements pour la taille de l'écran
    return () => window.removeEventListener("resize", checkScreenSize); // Nettoyage de l'écouteur
  }, []);

  const logos = [
    { src: "../public/img/logo_dr_dedry_black.png", alt: "Logo Dr Dedry" },
    { src: "../public/img/logo_gyw_black.png", alt: "Logo GYW" },
    { src: "../public/img/logo_lola_black.png", alt: "Logo Lola" },
    {
      src: "../public/img/logo_myinteriorlab_black.png",
      alt: "Logo My Interior Lab",
    },
    {
      src: "../public/img/logo_parquetbel_black.png",
      alt: "Logo Parquetbel",
    },
    {
      src: "../public/img/logo_bureau_ame_black.png",
      alt: "Bureau ame",
    },
    { src: "../public/img/logo_busway_black.png", alt: "Logo Sonar" },
    { src: "../public/img/logo_sonar_black.png", alt: "Logo Sonar" },
    { src: "../public/img/logo_squash_black.png", alt: "Logo Squash" },
    { src: "../public/img/logo_utamu_black.png", alt: "Logo Utamu" },
  ];

  return (
    <section
      id="HeroSection"
      className={`text-4xl md:pt-70   ${
        darkMode ? "text-gray-100 bg-black" : "text-black bg-gray-100"
      }`}
    >
      <header
        className={` md:pt-30 first-letter:relative ${
          darkMode ? "bg-black" : "bg-gray-100"
        }`}
      >
        <div
          className={`md:flex-row md:flex justify-between ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          <h1
            className="text-2xl   px-2 pb-4  md:px-4 md:text-start md:text-4xl lg:text-6xl font-thin
           leading-tight mb-6 md:mb-0"
          >
            NOTRE PASSION, <br />
            CONCEVOIR L'
            <span className="font-thin italic text-gray-400">IMAGINABLE</span>
            ,
            <br />
            L'EXCELLENCE DIGITALE/
          </h1>
          <p
            className={`text-sm px-2 font-thin pb-4  lg:text-xl md:text-right md:max-w-md  md:mt-auto ${
              darkMode ? "text-gray-300" : "text-black"
            }`}
          >
            Nous proposons des
            <span
              className={`font-extralight  ${
                darkMode ? "text-white" : "text-black"
              } `}
            >
              {" "}
              solutions web
            </span>{" "}
            &amp;
            <br className="hidden md:block" />
            <span
              className={`font-extralight ${
                darkMode ? "text-white" : "text-black"
              } `}
            >
              {" "}
              stratégies digitales
            </span>{" "}
            sur-mesure adaptées à
            <br className="hidden md:block" />
            votre image pour créer votre monde digital.
          </p>
        </div>
      </header>

      {/* Section vidéo */}
      <VideoSection />
      {/* Section des logos */}
      <div className="">
        {/* Mode normal (grille statique) */}
        {!isMobile ? (
          <div className="flex flex-wrap justify-center md:justify-between items-center">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={
                  darkMode ? logo.src.replace("_black.png", ".png") : logo.src
                }
                alt={logo.alt}
                className="w-full md:max-w-[152px] h-auto object-contain filter grayscale hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        ) : (
          // Mode mobile (bannière défilante)
          <div className="overflow-hidden py-4">
            {/* Conteneur avec défilement horizontal */}
            <div className="overflow-x-auto whitespace-nowrap flex space-x-8 no-scrollbar">
              {[...logos, ...logos].map((logo, index) => (
                <img
                  key={index}
                  src={
                    darkMode ? logo.src.replace("_black.png", ".png") : logo.src
                  }
                  alt={logo.alt}
                  className="w-24 h-auto object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
