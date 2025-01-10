import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "@aws-amplify/ui-react";
import { themes } from "../themes";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(themes.default);

  const switchTheme = (themeName) => {
    const newTheme = themes[themeName] || themes.default;
    setCurrentTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ switchTheme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
