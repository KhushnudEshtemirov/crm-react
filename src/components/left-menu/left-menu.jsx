import React, { useState, useEffect } from "react";

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
              <TiKeyOutline /> <span>Dashboard</span>
            </li>
            <li>
              <HiOutlineCube /> <span>Guruhlar</span>
              <SlArrowRight />
            </li>
            <li>
              <BiUser /> <span>O'quvchilar</span>
              <SlArrowRight />
            </li>
            <li>
              <BsCardList /> <span>Dars jadvali</span>
              <SlArrowRight />
            </li>
            <li>
              <TfiSettings /> <span>Sozlamalar</span>
              <SlArrowRight />
            </li>
            <li>
              <SlQuestion /> <span>Yordam</span>
              <SlArrowRight />
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
