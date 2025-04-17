import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ExpertiseSection from "./components/ExpertiseSection";
import PortfolioGrid from "./components/PortfolioGrid";
import Descriptif from "./components/Descriptif";
import TeamSection from "./components/TeamSection";
import ValuesSection from "./components/ValuesSection";
import Footer from "./components/Footer";

import { DarkModeProvider, useDarkMode } from "./context/DarkModeContext";

// Import de la police Gotham
import "../public/Gotham/Gotham.css";

function App() {
  return (
    <DarkModeProvider>
      <div className="font-gotham overflow-x-hidden">
        <NavBar />
        <HeroSection />
        <ExpertiseSection />
        <PortfolioGrid />
        <Descriptif />
        <TeamSection />
        <ValuesSection />
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;
