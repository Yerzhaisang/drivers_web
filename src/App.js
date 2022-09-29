import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Wheather from "./pages/Wheather";
import TaxiDrivers from "./pages/TaxiDrivers";

export default function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <a href="/wheather">Wheather</a>
      <br />
      <Link to="/taxidrivers">Taxi Drivers</Link>
      <br />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wheather" element={<Wheather />} />
        <Route path="/taxidrivers" element={<TaxiDrivers />} />
      </Routes>
    </>
  );
}
