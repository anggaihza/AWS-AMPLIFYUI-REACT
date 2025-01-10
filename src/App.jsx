import React from "react";
import { useTheme } from "./ThemeProvider";
import { Card, Button } from "@aws-amplify/ui-react";

function App() {
  const { switchTheme } = useTheme();

  const { theme } = useTheme();

  console.log("theme", theme.name);

  return (
    <div>
      <h1>Themed Pertamina Project</h1>
      <Card>
        <Button onClick={() => switchTheme("default")}>Default Theme</Button>
        <Button onClick={() => switchTheme("partnerA")}>Partner A Theme</Button>
        <Button onClick={() => switchTheme("partnerB")}>Partner B Theme</Button>
      </Card>
    </div>
  );
}

export default App;
