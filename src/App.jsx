import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/menu";
import Pagina01 from "./components/Pagina01";
import Pagina02 from "./components/Pagina02";

export default function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Pagina01 />} />
        <Route path="/personagens" element={<Pagina02 />} />
      </Routes>
    </div>
  );
}
