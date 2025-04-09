import { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";

const ExpertiseSection = () => {
  const { darkMode } = useDarkMode();
  const [hoverIndex, setHoverIndex] = useState(null); // État pour suivre l'élément survolé

  const services = [
    "IDENTITÉ VISUELLE",
    "UX/UI DESIGN",
    "DÉVELOPPEMENT SITE WEB",
    "E-COMMERCE",
    "APPLICATION WEB/MOBILE",
    "AUTOMATISATIONS",
    "SEO/SEA",
    "STRATÉGIE DIGITALE",
    "RÉSEAUX SOCIAUX",
  ];

  return (
    <section
      id="ExpertiseSection"
      className={`py-8 md:pb-50 md:pt-60 text-black ${
        darkMode ? "bg-black text-gray-300 " : "bg-gray-100 text-black"
      }`}
    >
      <div className="grid mx-auto px-4 md:px-8 ">
        <div className="flex flex-col mr-80 gap-8 md:flex-row justify-between">
          <div className="space-y-8 md:text-start md:space-y-16 max-w-3xl">
            <div className="space-y-4 md:pb-60">
              <h2 className="text-2xl font-thin md:text-4xl">
                Notre
                <span
                  className={`block font-extralight ${
                    darkMode ? "bg-black text-white " : "bg-gray-100 text-black"
                  } text-3xl md:text-6xl  mt-2`}
                >
                  EXPERTISE/
                </span>
              </h2>
            </div>

            <p className="font-extralight md:text-3xl  w-full  ">
              Nous proposons des solutions web & <br /> stratégies digitales
              sur-mesure adaptées à <br /> votre image pour créer votre monde{" "}
              <br /> digital.
            </p>

            <div className="font-extralight md:pt-24">
              <span className="text-sm md:text-3xl  md:block uppercase tracking-wider ">
                SERVICES
              </span>
            </div>
          </div>

          <div className=" flex justify-end md:items-center ">
            <ul className="flex flex-col space-y-4 md:space-y-4 md:items-start ">
              {services.map((service, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  className={`text-sm font-extralight md:text-xl transition-all duration-300 hover:translate-x-2 ${
                    hoverIndex === index
                      ? "font-extralight"
                      : "filter blur-[1.4px] hover:blur-0"
                  } ${
                    darkMode ? "text-white" : "text-gray-700"
                  } cursor-pointer  w-full md:text-start`}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
