import React from "react";
import { useTheme } from "./ThemeProvider";

function App() {
  const { switchTheme } = useTheme();

  return (
    <div>
      <h1>Amplify UI Theming Example</h1>
      <button onClick={() => switchTheme("default")}>Default Theme</button>
      <button onClick={() => switchTheme("partnerA")}>Partner A Theme</button>
      <button onClick={() => switchTheme("partnerB")}>Partner B Theme</button>
    </div>
  );
}

export default App;
