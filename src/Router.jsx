import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { ErrorPage } from "./components/ErrorPage";
import { ExchangeRates } from "./components/ExchangeRates";

function RouterFile() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/error_page" element={<ErrorPage />} />
      <Route path="/exchange_rates_live" element={<ExchangeRates />} />
    </Routes>
  );
}

export default RouterFile;
