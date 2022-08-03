import "./App.scss";
import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Units from "./pages/Units";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/units" element={<Units />} />
    </Routes>
  );
}

export default App;
