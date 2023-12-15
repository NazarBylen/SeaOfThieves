import "./App.css"
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import About from "./modules/About/About"
import Home from "./modules/Home/Home"
import Sidebar from "./components/Sidebar/Sidebar"

function App() {
  return (
    <Router>
      <Sidebar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
