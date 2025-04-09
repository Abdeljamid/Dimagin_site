import { useState, useEffect } from "react";

const useClock = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateClock(); // Mise à jour immédiate
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval); // Nettoyage à la suppression du composant
  }, []);

  return currentTime;
};

export default useClock;
