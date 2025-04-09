import { useDarkMode } from "../context/DarkModeContext";

const ValuesSection = () => {
  const { darkMode } = useDarkMode();

  return (
    <section
      id="ValuesSection"
      className={`${
        darkMode ? "bg-black text-gray-300" : "bg-gray-100 text-black"
      } grid p-4 md:p-8`}
    >
      <header className="flex flex-col md:flex-row md:pt-30 justify-between items-start md:items-end mb-8 md:mb-4">
        <h1 className="text-2xl md:text-4xl font-thin mb-4 md:mb-0">
          Nos <br />
          <span
            className={`text-3xl font-extralight md:text-4xl ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            VALEURS/
          </span>
        </h1>
        <p className={`text-sm md:text-2xl ${darkMode ? "text-white" : ""}`}>
          PHILOSOPHIE
        </p>
      </header>

      <div className="space-y-8">
        {[
          {
            title: "Passion",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis diam elit, eget congue libero luctus nec. Maecenas tempor turpis vel dapibus sagittis. Proin laoreet, sapien ut posuere placerat, massa orci cursus eros, ac posuere est eros sit amet ipsum. Ut volutpat elementum venenatis. Quisque ornare tempor sem vitae consectetur. Curabitur quis tellus dui. Suspendisse varius pellentesque nunc, ut porta erat rutrum ut. Proin scelerisque suscipit diam blandit auctor. Nunc et sapien maximus, imperdiet enim imperdiet, ullamcorper urna.",
          },
          {
            title: "Excellence",
            text: "Text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
          },
          {
            title: "Qualité",
            text: "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release",
          },
          {
            title: "Innovation",
            text: "Morbi nec risus in nulla luctus dignissim a ut orci. Donec posuere massa pharetra arcu rhoncus blandit. Sed suscipit libero ligula, a mattis metus congue in. Nam tempus at nibh nec cursus. Quisque blandit dapibus ligula sit amet pharetra. Donec maximus vel velit quis gravida. In massa lacus, efficitur at orci sit amet, convallis interdum massa.",
          },
          {
            title: "Créativité",
            text: "Aliquam ut aliquet velit. Mauris eget massa odio. Vivamus lacinia mi id magna aliquam, interdum sagittis ligula hendrerit. Nunc eget mi lobortis, suscipit risus ac, pretium odio.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-3 md:pr-60 gap-4 md:gap-80 ${
              darkMode ? "border-gray-600" : "border-gray-300"
            } border-t-2 py-4 md:py-8`}
          >
            <h2
              className={`text-lg md:text-4xl font-extralight ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {item.title}
            </h2>
            <p className="text-sm   md:font-extralight  md:w-3/4 md:col-span-2">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
