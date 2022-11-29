import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./left-menu.scss";

import { RiSettingsLine } from "react-icons/ri";
import { TiKeyOutline } from "react-icons/ti";
import { HiOutlineCube } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import { BsCardList } from "react-icons/bs";
import { TfiSettings } from "react-icons/tfi";
import { SlQuestion, SlArrowRight, SlArrowDown, SlClock } from "react-icons/sl";

import userImg from "../../images/user/user.JPG";

const LeftMenu = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  let hour = time.getHours();
  let minut = time.getMinutes();
  let second = time.getSeconds();

  const [leftValue, setLeftValue] = useState(true);

  const miniLeft = () => {
    setLeftValue(!leftValue);
  };

  return (
    <div className={`left-menu ${leftValue ? "" : "hidden"}`}>
      <div className="menu-container">
        <div className="left-top">
          <div className="setting">
            <RiSettingsLine onClick={miniLeft} />
          </div>
          <span className="dashboard">Dashboard</span>
        </div>
        <div className="left-middle">
          <ul>
            <li className="active">
              <Link to="/">
                <TiKeyOutline /> <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/group">
                <HiOutlineCube /> <span>Guruhlar</span>
                <SlArrowRight />
              </Link>
            </li>
            <li>
              <Link to="/student">
                <BiUser /> <span>O'quvchilar</span>
                <SlArrowRight />
              </Link>
            </li>
            <li>
              <Link to="/schedule">
                <BsCardList /> <span>Dars jadvali</span>
                <SlArrowRight />
              </Link>
            </li>
            <li>
              <Link to="/setting">
                <TfiSettings /> <span>Sozlamalar</span>
                <SlArrowRight />
              </Link>
            </li>
            <li>
              <Link to="/help">
                <SlQuestion /> <span>Yordam</span>
                <SlArrowRight />
              </Link>
            </li>
          </ul>
        </div>
        <div className="left-bottom">
          <div className="timer">
            <SlClock />
            <span>
              {hour} : {minut} : {second}
            </span>
          </div>
          <div className="user-detail">
            <div className="user-img">
              <img src={userImg} alt="user image" />
            </div>
            <div className="name-job">
              <p>Khushnud Eshtemirov</p>
              <span>Front-end dasturchi</span>
            </div>
            <SlArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
