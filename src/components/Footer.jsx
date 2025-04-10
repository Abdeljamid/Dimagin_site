import {
  Dribbble,
  ArrowUpLeft,
  ArrowUpRight,
  Instagram,
  Linkedin,
  Facebook,
  Mail,
} from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";

const Footer = () => {
  const { darkMode } = useDarkMode();

  const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Dribbble, href: "#" },
  ];

  return (
    <footer
      id="contact"
      className={`${
        darkMode ? "bg-black text-gray-500" : "bg-gray-100 text-black"
      }`}
    >
      {/* Section Contact */}
      <section className="  md:py-24 p-4 ">
        <div>
          <h2
            className={`text-5xl  md:text-6xl ${
              darkMode ? "text-white" : "text-black"
            } `}
          >
            Donnons vie <br /> à votre projet !
          </h2>
          <a
            className={`pt-4 md:text-4xl font-thin  w-fit ${
              darkMode
                ? "text-gray-400 hover:text-white"
                : "text-gray-500 hover:text-black"
            } flex  `}
            href="mailto:start@dimagin.be"
          >
            start@dimagin.be
            <span>
              <ArrowUpRight
                strokeWidth={0.5}
                className={`${
                  darkMode
                    ? "text-gray-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    : "text-gray-700 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                }`}
                size={50}
              />
            </span>
          </a>
        </div>
      </section>

      {/* Section Informations */}
      <section className=" grid grid-cols-1 md:grid-cols-4 font-extralight  px-4 md:px-4 py-4 gap-8">
        {/* Coordonnées */}
        <div className="col-span-1  md:text-lg">
          <h3
            className={`text-xs md:text-xl lg:text-2xl ${
              darkMode ? "text-white" : "text-black"
            } `}
          >
            Coordonnées
          </h3>
          <div
            className={` font-thin
              ${darkMode ? "text-white" : "text-gray-600 "}
             `}
          >
            <p>Places des Arts 1, 4020 Liège</p>
            <p>hello@dimagin.be</p>
            <p>+32 (0)456 38 41 24</p>
          </div>
        </div>

        {/* Informations légales */}
        <div className="col-span-1 md:text-lg">
          <h3
            className={`text-xl  md:text-xl lg:text-2xl ${
              darkMode ? "text-white" : "text-black"
            } `}
          >
            Dimagin SRL
          </h3>
          <div
            className={` font-thin
              ${darkMode ? "text-white" : "text-gray-600 "}
             `}
          >
            <p>BE 0805 685 463</p>
            <a
              href="#"
              className={`${
                darkMode
                  ? "text-gray-500 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors`}
            >
              Conditions générales de ventes
            </a>
            <p>&copy; Tout droit réservé 2025</p>
          </div>
        </div>

        {/* Réseaux sociaux et Back to Top */}
        <div className="col-span-1  md:pt-10 md:col-span-2 flex flex-col items-end">
          <a
            href="#"
            className={` flex gap-2 md:text-xl ${
              darkMode
                ? "text-gray-500 hover:text-white"
                : "text-black hover:text-gray-900"
            } text-sm font-extralight mb-2 hover:underline`}
          >
            {" "}
            <span>
              <ArrowUpLeft />
            </span>
            Back to Top
          </a>

          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`${
                  darkMode
                    ? "text-white hover:text-white"
                    : "text-black hover:text-gray-900"
                } text-2xl transition-colors`}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
