import { useDarkMode } from "../context/DarkModeContext";

const TeamSection = () => {
  const { darkMode } = useDarkMode();

  return (
    <section
      id="TeamSection"
      className={` scroll-margin-top:60px; transition-colors duration-300 ${
        darkMode ? "bg-black text-gray-300" : "bg-gray-100 text-gray-900"
      }`}
    >
      <header className="flex mx-4  md:mx-4    justify-between ">
        <p
          className={`font-extralight md:text-xl pt-16 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          STUDIO
        </p>
        <h1 className="text-3xl pt-4 md:pt-0 font-thin text-right">
          Notre <br />
          <span
            className={`text-3xl ${
              darkMode ? "text-white" : "text-black"
            } font-extralight md:text-5xl`}
          >
            DIMAGINARIUM/
          </span>
        </h1>
      </header>

      {/* Cartes des membres */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md: pb-16">
        {[
          {
            name: "Pierre",
            role: "UI/UX DESIGNER",
            img: "pierre-godfrin.png",
            title: " | founder",
            linkedin: true,
            linkedinUrl: "https://www.linkedin.com/in/pierregodfrin", // Exemple de lien LinkedIn pour Pierre
          },
          {
            name: "Ryan",
            role: "DEV FULL STACK",
            img: "ryan.jpeg",
            title: "",
            linkedin: false,
          },
          {
            name: "Manon",
            role: "BACK END & COMMUNICATION",
            img: "manon-aussems.jpg",
            title: "",
            linkedin: true,
            linkedinUrl: "https://www.linkedin.com/in/manonaussems", // Exemple de lien LinkedIn pour Manon
          },
          {
            name: "Bruno",
            role: "DEV FULL STACK / DEVOPS",
            img: "bruno.png",
            title: "",
            linkedin: false,
          },
        ].map((member, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden ${
              darkMode ? "bg-black" : "bg-gray-100"
            } transition-all duration-300`}
          >
            <div className="overflow-hidden">
              <img
                src={`/dimagin_files/${member.img}`}
                alt={member.name}
                className="w-full h-100 md:h-100 lg:h-130 xl:h-160  object-cover transition-transform duration-300   group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="pt-4">
              <h3
                className={`text-lg md:text-2xl font-extralight ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                {member.name}
                {member.title && (
                  <span
                    className={`text-sm md:text-2xl font-extralight ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {member.title}
                  </span>
                )}
              </h3>
              <p
                className={`text-sm font-extralight md:text-xl ${
                  darkMode ? "text-white" : "text-gray-300"
                }`}
              >
                {member.role}
              </p>
              {/* Si le membre a un LinkedIn */}
              {member.linkedin && (
                <a
                  href={member.linkedinUrl}
                  className={` font-thin hover:text-blue-100 transition-colors duration-200 ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
