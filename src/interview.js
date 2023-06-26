import React, { useState, createContext, useContext } from "react";
import { createRoot } from "react-dom/client";

const languages = ["JavaScript", "Python"];

const LanguageContext = createContext(languages);
function App() {
  // implement Context here so can be used in child components
  return (
    <LanguageContext.Provider value={languages}>
      <MainSection />;
    </LanguageContext.Provider>
  );
}

function MainSection() {
  const allLanguages = useContext(LanguageContext);

  const [language, setLanguage] = useState(true);

  const toggleLanguage = (e) => {
    e.preventDefault();
    setLanguage((state) => !state);
  };

  return (
    <div>
      <p id="favoriteLanguage">
        Favorite programing language: $
        {language ? allLanguages[0] : allLanguages[1]}
      </p>
      <button id="changeFavorite" onClick={toggleLanguage}>
        Toggle language
      </button>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
