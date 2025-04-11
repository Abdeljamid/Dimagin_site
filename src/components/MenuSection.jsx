import React from "react";
import { X, ArrowRight } from "lucide-react"; // Icône de fermeture et flèche
import { useDarkMode } from "../context/DarkModeContext"; // Importation du contexte Dark Mode

const MenuSection = ({
  currentSection,
  scrollToSection,
  toggleMenu,
  socialLinks,
}) => {
  const { darkMode } = useDarkMode(); // Récupérer l'état du mode sombre

  return (
    <section>
      <div
        className={`fixed top-0 left-0 w-full h-full flex z-50 font-thin ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
        }`}
      >
        {/* Partie Gauche - Navigation avec lignes entre chaque lien */}
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
            className="w-140 md:w-32 p-4 block md:hidden " // Réduction de la taille de l'image
          />
          <div className="flex flex-col space-y-4 pb-4">
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
                className={`w-full py-3 px-2 text-left text-lg transition-all duration-300 ${
                  currentSection === id
                    ? "text-black font-extralight underline underline-offset-4"
                    : "hover:text-yellow-100"
                } flex justify-between items-center ${
                  index < 6 ? "border-b" : ""
                } ${darkMode ? "border-gray-700" : "border-gray-400"}`}
              >
                <span>{label}</span>
                <ArrowRight
                  strokeWidth={0.5}
                  size={24} // Taille réduite pour mobile
                  className={`${
                    currentSection === id ? "text-black" : "text-gray-500"
                  } transition-colors`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className={`absolute block md:hidden top-4 right-4  text-gray-400 hover:text-black transition-colors`}
            aria-label="Fermer le menu"
          >
            <X size={24} />
          </button>

          {/* Ligne de copyright en bas */}
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

        {/* Partie Droite - Infos + bouton fermeture */}
        <div
          className={`w-full sm:w-1/2 md:pt-20 sm:p-8 hidden md:flex flex-col justify-between items-center relative ${
            darkMode ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          {/* Bouton Fermer */}
          <button
            onClick={toggleMenu}
            className={`absolute top-4 right-4 text-gray-400 hover:text-yellow-200 transition-colors`}
            aria-label="Fermer le menu"
          >
            <X size={24} />
          </button>

          {/* Image */}
          <img
            src={
              darkMode
                ? "/img/logo_dimagin_blanc_&_vert.png"
                : "/img/logo_dimagin_noir_&_vert.png "
            }
            alt="Studio"
            className="w-130 p-4" // Réduction de la taille de l'image
          />

          {/* Coordonnées & Réseaux */}
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
                  className={`text-gray-500 hover:text-yellow-100 transition-colors ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  <social.icon />
                </a>
              ))}
            </div>

            <a
              href="/privacy-policy"
              className="underline text-xs sm:text-sm hover:text-yellow-100"
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
