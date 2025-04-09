import React, { createContext, useContext, useState } from "react";

// Créer un contexte pour le dark mode
const DarkModeContext = createContext();

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

// Fournisseur de contexte qui permet de passer l'état du dark mode à toute l'application
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Basculer le mode sombre
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
