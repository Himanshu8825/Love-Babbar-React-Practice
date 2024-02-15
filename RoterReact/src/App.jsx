import React from "react";
import { Link, Route, Routes, NavLink } from "react-router-dom"; // Import Routes from react-router-dom
import Home from "./components/Home";
import About from "./components/About";
import Support from "./components/Support";
import Labs from "./components/Labs";

const App = () => {
  return (
    <div>
      <div className="flex gap-5 m-4">
        <nav>
          <ul className="flex gap-2">
            <li>
              <NavLink to="/"> Home </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/support">Support</NavLink>
            </li>
            <li>
              <NavLink to="/labs">Labs</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/labs" element={<Labs />} />
      </Routes>
    </div>
  );
};

export default App;
