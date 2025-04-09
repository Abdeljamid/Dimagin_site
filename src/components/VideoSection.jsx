// src/components/VideoSection.jsx

import { ArrowUpRight } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="relative w-full h-full">
      <video
        className="w-full   h-[40vh] md:h-[100vh] lg:h-[100vh] object-cover object-left-top"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="../documents/dimagin_files/test_animation_accueil.mp4"
          type="video/mp4"
        />
        Votre navigateur ne supporte pas la balise vidéo.
      </video>

      <a
        href="mailto:start@dimagin.be"
        className="group flex items-center absolute gap-4 md:gap-16 top-4 right-4 hover:opacity-80 transition-opacity"
      >
        <span className="relative flex md:gap-24 items-center">
          <span className="font-extralight md:text-4xl text-transparent bg-gradient-to-r from-stone-800 via-gray-300 to-stone-600 bg-clip-text">
            start@dimagin.be
          </span>
          <ArrowUpRight
            strokeWidth={0.5}
            className="ml-2 text-stone-400 hidden md:block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            size={70}
          />
          <ArrowUpRight
            strokeWidth={0.5}
            className="ml-2 text-stone-400 md:hidden transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            size={30}
          />
          <span className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-gradient-to-r from-gray-700 via-gray-200 to-gray-600"></span>
        </span>
      </a>
    </section>
  );
};

export default VideoSection;
