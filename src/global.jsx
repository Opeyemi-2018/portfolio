import { createContext, useState } from "react";

export let GlobalContext = createContext();

export let GlobalContextProvider = ({ children }) => {
  let [themeMode, setThemeMode] = useState("light");
  const toggleThemeMode = () => {
    console.log("Toggling theme");
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <GlobalContext.Provider value={{ themeMode, toggleThemeMode }}>
      {children}
    </GlobalContext.Provider>
  );
};
