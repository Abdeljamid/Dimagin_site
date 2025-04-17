import React from "react";
import { X, ArrowRight } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";

const MenuSection = ({
  currentSection,
  scrollToSection,
  toggleMenu,
  socialLinks,
}) => {
  const { darkMode } = useDarkMode();

  return (
    <section>
      <div
        className={`fixed top-0 left-0 w-full h-full flex z-50 font-thin ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
        }`}
      >
        {/* Partie Gauche */}
        <div
          className={`w-full sm:w-1/2 p-4 pt-20 md:pt-10 sm:p-8 flex flex-col justify-between border-b sm:border-r ${
            darkMode ? "border-gray-700" : "border-gray-400"
          } h-full`}
        >
          <img
            src={
              darkMode
                ? "/img/logo_dimagin_blanc_&_vert.png"
                : "/img/logo_dimagin_noir_&_vert.png "
            }
            alt="Studio"
            className="w-140 md:w-32 p-4 block md:hidden"
          />
          <div className="flex flex-col cursor-pointer space-y-4 pb-4">
            {[
              { id: "HeroSection", label: "Accueil" },
              { id: "ExpertiseSection", label: "Expertise" },
              { id: "PortfolioGrid", label: "Portfolio" },
              { id: "Descriptif", label: "Descriptif" },
              { id: "TeamSection", label: "Team" },
              { id: "ValuesSection", label: "Nos Valeurs" },
              { id: "contact", label: "Contactez-Nous" },
            ].map(({ id, label }, index) => (
              <button
                key={id}
                onClick={() => {
                  scrollToSection(id);
                  toggleMenu();
                }}
                className={`w-full cursor-pointer py-3 px-2 text-left text-lg transition-all duration-300 ${
                  currentSection === id
                    ? "text-gray-700  cursor-pointer font-extralight underline underline-offset-4"
                    : `${
                        darkMode
                          ? "hover:text-gray-400 text-white"
                          : "hover:text-gray-900 text-black"
                      }`
                } flex justify-between items-center ${
                  index < 6 ? "border-b" : ""
                } ${darkMode ? "border-gray-700" : "border-gray-400"}`}
              >
                <span>{label}</span>
                <ArrowRight
                  strokeWidth={0.5}
                  size={24}
                  className={`${
                    currentSection === id
                      ? "text-black"
                      : `${darkMode ? "text-gray-400" : "text-gray-500"}`
                  } transition-colors`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className={`absolute block  md:hidden top-4 right-4 transition-colors ${
              darkMode
                ? "text-gray-400 hover:text-gray-200"
                : "text-gray-400 hover:text-gray-700"
            }`}
            aria-label="Fermer le menu"
          >
            <X size={24} />
          </button>

          <div
            className={`border-t mt-4 pt-2 text-xs ${
              darkMode
                ? "border-gray-700 text-gray-400"
                : "border-gray-400 text-gray-600"
            }`}
          >
            © {new Date().getFullYear()} STUDIO DIMAGIN
          </div>
        </div>

        {/* Partie Droite */}
        <div
          className={`w-full sm:w-1/2 md:pt-20 sm:p-8 hidden md:flex flex-col justify-between items-center relative ${
            darkMode ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <button
            onClick={toggleMenu}
            className={`absolute top-4 right-4 cursor-pointer transition-colors ${
              darkMode
                ? "text-gray-400 hover:text-gray-200"
                : "text-gray-400 hover:text-gray-700"
            }`}
            aria-label="Fermer le menu"
          >
            <X size={24} />
          </button>

          <img
            src={
              darkMode
                ? "/img/logo_dimagin_blanc_&_vert.png"
                : "/img/logo_dimagin_noir_&_vert.png "
            }
            alt="Studio"
            className="w-130 p-4"
          />

          <div className="text-center space-y-1 font-thin text-sm sm:text-xl">
            <p className="font-extralight">hello@dimagin.be</p>
            <p>+32 (0)456 38 41 24</p>
            <p>Places des Arts 1, 4020 Liège</p>
            <p>Lu–Ve : 09h–17h</p>

            <div className="flex justify-center gap-2 py-2 text-base sm:text-lg">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`transition-colors cursor-pointer  ${
                    darkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  <social.icon />
                </a>
              ))}
            </div>

            <a
              href="/privacy-policy"
              className={`underline text-xs sm:text-sm cursor-pointer transition-colors ${
                darkMode ? "hover:text-white" : "hover:text-black"
              }`}
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
