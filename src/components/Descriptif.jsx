"use client";
import { motion } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";

const Descriptif = () => {
  const { darkMode } = useDarkMode();

  const text = `Notre studio liégeois composé de passionnés est spécialisé dans 
  le design, l'expérience utilisateur et le développement web sur mesure. 
  Notre approche unique favorise la croissance de nos clients grâce à des 
  solutions digitales créatives et innovantes. Nous sommes situés au 
  cœur du B3 (nouveau centre de ressources).`;

  const words = text.split(" ");

  return (
    <section
      id="Descriptif"
      className={` px-6 py-30 md:p-4 md:min-h-screen flex items-center transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="text-lg md:text-4xl lg:text-5xl font-semi leading-relaxed w-9/10 ">
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0.2, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.05,
              duration: 0.3,
              ease: "easeOut",
            }}
            className="mr-2 inline-block"
          >
            {word}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default Descriptif;
