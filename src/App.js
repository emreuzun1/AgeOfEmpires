import "./App.scss";
import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Units from "./pages/Units";
import Detail from "./pages/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/units" element={<Units />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
