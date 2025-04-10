import { useDarkMode } from "../context/DarkModeContext";

const PortfolioGrid = () => {
  const { darkMode } = useDarkMode();

  return (
    <section
      id="PortfolioGrid"
      className={`${
        darkMode ? "bg-black text-gray-300" : "bg-gray-100 text-black"
      } py-8 md:py-16 font-thin`}
    >
      <div className="  px-4">
        <header className="mb-8 md:mb-0">
          <h2 className="text-3xl md:text-6xl  md:text-right">
            Nous développons et <br />
            communiquons avec{" "}
            <span
              className={`${
                darkMode ? "bg-black text-white " : "bg-gray-100 text-black"
              } font-extralight`}
            >
              STYLE
            </span>
            .
          </h2>
        </header>

        {/* Première grille */}
        <div className="flex flex-col md:flex-row gap-4  mb-8 md:mb-4">
          <div className="w-full md:w-1/2">
            <div className="aspect-[4/3]">
              <img
                src="/dimagin_files/projet_dr_dedry.png"
                alt="Projet Dr Dedry"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex md:hidden justify-between items-center text-sm md:text-lg">
              <p className="font-extralight">Dr Dedry</p>
              <a
                className={`${
                  darkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors duration-200`}
                href="#"
              >
                Voir le projet
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
              {[
                {
                  src: "/dimagin_files/projet_mon_permis_plus.png",
                  alt: "Projet Mon Permis Plus",
                  title: "Mon Permis Plus",
                },
                {
                  src: "/dimagin_files/barbarich.png",
                  alt: "Projet Barbarich",
                  title: "Barbarich",
                },
              ].map((projet, index) => (
                <div key={index} className="space-y-4">
                  <div className="aspect-[4/3]">
                    <img
                      src={projet.src}
                      alt={projet.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex justify-between items-center text-sm md:text-xl">
                    <p className="font-extralight">{projet.title}</p>
                    <a
                      className={`${
                        darkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                      } transition-colors duration-200`}
                      href="#"
                    >
                      Voir le projet
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Deuxième grille */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 md:mb-4">
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 h-full gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/3]">
                  <img
                    src="/img/lolafood.png"
                    alt="Projet Lola Food"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex justify-between items-center text-sm md:text-lg">
                  <p className="font-extralight">Lola Food</p>
                  <a
                    className={`${
                      darkMode
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    } transition-colors duration-200`}
                    href="#"
                  >
                    Voir le projet
                  </a>
                </div>
              </div>
              <div className="relative">
                {/* Parent avec position relative */}
                <h1 className="md:absolute bottom-0  md:left-auto md:right-0 md:text-right  font-thin md:px-4 md:text-3xl lg:text-5xl     md:mb-0 gap-4">
                  <span className=" font-extralight  ">Sur-mesure,</span>
                  <br />
                  <span className="">
                    car chaque
                    <br className="hidden md:block" /> projet
                    <br className="hidden md:block" /> est unique !
                  </span>
                </h1>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="aspect-[4/3]">
              <img
                src="/dimagin_files/projet_bureau_ame.png"
                alt="Projet Bureau Âme"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Troisième grille */}
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="w-full md:w-3/4">
            <div className="space-y-4">
              <div className="">
                <h1 className=" gap-4 md:hidden  bottom-0 right-0 text-right text-sm md:font-extralight">
                  Voir toutes <br />
                  <span className="font-extralight text-right  md:font-extralight">
                    NOS REALISATIONS
                  </span>
                </h1>
                <img
                  src="/img/lampadaire.png"
                  alt="Projet Exemple"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between items-center text-sm md:text-lg">
                <p className="font-extralight">Get your way</p>
                <a
                  className={`${
                    darkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } transition-colors duration-200`}
                  href="#"
                >
                  Voir le projet
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 relative flex md:flex-col md:items-end  text-sm md:text-lg">
            <h1 className="md:flex hidden flex-col   md:bottom-0 text-right text-sm md:font-extralight">
              <a
                className={`${
                  darkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors duration-200`}
                href="#"
              >
                Voir toutes
              </a>
              <span className="font-extralight  md:text-2xl ">
                NOS REALISATIONS
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
