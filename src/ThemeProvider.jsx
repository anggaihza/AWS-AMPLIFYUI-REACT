import React, { createContext, useState, useContext, useEffect } from "react";
import { ThemeProvider as AmplifyThemeProvider } from "@aws-amplify/ui-react";
import { defaultTheme } from "./themes/defaultTheme";
import { partnerThemeA } from "./themes/partnerThemeA";
import { partnerThemeB } from "./themes/partnerThemeB";

const themes = {
  default: defaultTheme,
  partnerA: partnerThemeA,
  partnerB: partnerThemeB,
};

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

// Function to update :root CSS variables
const applyThemeToRoot = (themeTokens) => {
  const root = document.documentElement;

  // Update background color, font, etc.
  Object.entries(themeTokens.colors).forEach(([key, { value }]) => {
    console.log("key", key);
    root.style.setProperty(`--color-${key}`, value);
  });

  Object.entries(themeTokens.fonts).forEach(([key, { value }]) => {
    root.style.setProperty(`--font-${key}`, value);
  });
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const switchTheme = (themeName) => {
    const selectedTheme = themes[themeName];
    if (!selectedTheme) {
      console.error(`Theme "${themeName}" not found`);
      return;
    }

    setTheme(selectedTheme); // Set theme in state
    applyThemeToRoot(selectedTheme.tokens); // Apply to :root
  };

  useEffect(() => {
    // Apply the default theme initially
    applyThemeToRoot(defaultTheme.tokens);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <AmplifyThemeProvider theme={theme}>{children}</AmplifyThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
