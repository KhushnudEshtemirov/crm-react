import React from "react";
import { Routes, Route } from "react-router-dom";

import LeftMenu from "./components/left-menu/left-menu";
import Homepage from "./pages/homepage";
import TopMenu from "./components/top-menu/top-menu";
import Student from "./components/student/student";

import "./App.css";

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <TopMenu />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </div>
  );
}

export default App;
