import React from "react";
import { Routes, Route } from "react-router-dom";

import LeftMenu from "./components/left-menu/left-menu";
import Homepage from "./pages/homepage";
import TopMenu from "./components/top-menu/top-menu";
import Student from "./components/student/student";
import Groups from "./components/group/group";
import Schedule from "./components/schedule/schedule";
import Setting from "./components/setting/setting";
import Help from "./components/help/help";

import "./App.css";

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <TopMenu />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/group" element={<Groups />} />
        <Route path="/student" element={<Student />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
