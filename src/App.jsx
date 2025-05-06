import React, { useState, useMemo } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom"; // ✅ move Router here
import Header from "./components/Header";
import RouterFile from "./Router";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const App = () => {
  const [mode, setMode] = useState("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode },
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {" "}
        {/* ✅ Router wraps the whole app */}
        <Header toggleTheme={toggleTheme} />
        <div className="css-9wvnva">
          <RouterFile />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
