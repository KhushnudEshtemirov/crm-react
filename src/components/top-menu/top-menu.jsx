import React from "react";

import "./top-menu.scss";

import { BsMoon, BsPlusCircleFill, BsBell } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

const TopMenu = () => (
  <div className="top-menu">
    <h2>Salom Khushnud 👋,</h2>
    <div className="right-side">
      <ul>
        <li>
          <BsMoon />
        </li>
        <li>
          <BsPlusCircleFill />
        </li>
        <li>
          <BsBell />
        </li>
        <li>
          <FiSearch />
          <input type="text" name="search" id="search" placeholder="Qidiruv" />
        </li>
      </ul>
    </div>
  </div>
);

export default TopMenu;
