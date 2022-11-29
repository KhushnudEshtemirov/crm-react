import React from "react";

import "./student.scss";

import usersImg1 from "../../images/icons/1.png";
import usersImg2 from "../../images/icons/2.png";
import usersImg3 from "../../images/icons/3.png";
import usersImg4 from "../../images/icons/4.png";
import usersImg5 from "../../images/icons/5.png";
import usersImg6 from "../../images/icons/6.png";

import {
  HiArrowUp,
  HiArrowDown,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";
import { SlArrowDown } from "react-icons/sl";
import { FiSearch } from "react-icons/fi";

const Student = () => (
  <div className="students">
    <div className="student-container">
      <div className="top-window">
        <div className="all-students">
          <img src={usersImg3} alt="users" />
          <div className="right-data">
            <p>Hamma o’quvchilar</p>
            <h2>125 ta</h2>
            <div>
              <HiArrowUp
                style={{
                  color: "#0ec901",
                  marginRight: "5px",
                  fontSize: "20px",
                }}
              />
              <span style={{ color: "#0ec901", fontWeight: "600" }}>16% </span>
              oylik
            </div>
          </div>
        </div>
        <div className="graduated-students">
          <img src={usersImg4} alt="users" />
          <div className="right-data">
            <p>Bitirgan o’quvchilar</p>
            <h2>61 ta</h2>
          </div>
        </div>
        <div className="went-students">
          <img src={usersImg1} alt="users" />
          <div className="right-data">
            <p>Bitirgan o’quvchilar</p>
            <h2>125 ta</h2>
            <div>
              <HiArrowDown
                style={{
                  color: "red",
                  marginRight: "5px",
                  fontSize: "20px",
                }}
              />
              <span style={{ color: "red", fontWeight: "600" }}>1% </span>
              oylik
            </div>
          </div>
        </div>
        <div className="active-students">
          <img src={usersImg2} alt="users" />
          <div className="right-data">
            <p>Faol o’quvchilar</p>
            <h2>54 ta</h2>
            <div className="some-images">
              <img src={usersImg5} alt="users" />
              <img src={usersImg6} alt="users" />
              <img src={usersImg5} alt="users" />
              <img src={usersImg6} alt="users" />
              <img src={usersImg5} alt="users" />
            </div>
          </div>
        </div>
      </div>
      <div className="total-students">
        <div className="top-data">
          <div>
            <h2>Hamma O’quvchilar</h2>
            <span>Faol o’quvchilar</span>
          </div>
          <div className="search2">
            <FiSearch />
            <input
              type="text"
              name="search2"
              id="search2"
              placeholder="Qidiruv"
            />
          </div>
          <button>
            <span>Short Status: </span>Faol <SlArrowDown />
          </button>
        </div>
        <div className="table-students">
          <table>
            <thead>
              <tr>
                <td>F.I.O</td>
                <td>Yo’nalish</td>
                <td>Telefon nomer</td>
                <td>To’lov</td>
                <td>Guruh</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jane Cooper</td>
                <td>Microsoft</td>
                <td>(225) 555-0118</td>
                <td>697 000</td>
                <td>Frontend 010</td>
                <td>
                  <button className="active">Active</button>
                </td>
              </tr>
              <tr>
                <td>Floyd Miles</td>
                <td>Yahoo</td>
                <td>(225) 555-0118</td>
                <td>697 000</td>
                <td>Frontend 010</td>
                <td>
                  <button className="inactive">Inactive</button>
                </td>
              </tr>
              <tr>
                <td>Ronald Richards</td>
                <td>Adobe</td>
                <td>(225) 555-0118</td>
                <td>697 000</td>
                <td>Frontend 010</td>
                <td>
                  <button className="inactive">Inactive</button>
                </td>
              </tr>
              <tr>
                <td>Marvin McKinney</td>
                <td>Tesla</td>
                <td>(225) 555-0118</td>
                <td>697 000</td>
                <td>Frontend 010</td>
                <td>
                  <button className="active">Active</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <ul>
            <li>
              <HiChevronLeft />
            </li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>...</li>
            <li>40</li>
            <li>
              <HiChevronRight />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Student;
