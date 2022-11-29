import React from "react";

import "./homepage.scss";

const Homepage = () => (
  <div className="homepage">
    <div className="homepage-body">
      <div className="statistic">
        <div className="statistic-header">
          <h2>Yillik Statistika</h2>
          <select name="stat-year" id="year">
            <option value="years">Yillar</option>
            <option value="2019">2020</option>
            <option value="2019">2021</option>
            <option value="2019">2022</option>
          </select>
        </div>
        <div className="statistic-graph">
          <div className="column">
            <div className="percent">20%</div>
            <div className="outer-div">
              <div style={{ "--height": "111px" }}></div>
            </div>
            <p>Yan</p>
          </div>
          <div className="column">
            <div className="percent">33%</div>
            <div className="outer-div">
              <div style={{ "--height": "142px" }}></div>
            </div>
            <p>Fev</p>
          </div>
          <div className="column">
            <div className="percent">35%</div>
            <div className="outer-div">
              <div style={{ "--height": "176px" }}></div>
            </div>
            <p>Mart</p>
          </div>
          <div className="column">
            <div className="percent">16%</div>
            <div className="outer-div">
              <div style={{ "--height": "131px" }}></div>
            </div>
            <p>Apr</p>
          </div>
          <div className="column">
            <div className="percent">30%</div>
            <div className="outer-div">
              <div style={{ "--height": "94px" }}></div>
            </div>
            <p>May</p>
          </div>
          <div className="column">
            <div className="percent">31%</div>
            <div className="outer-div">
              <div style={{ "--height": "131px" }}></div>
            </div>
            <p>Iyn</p>
          </div>
          <div className="column">
            <div className="percent">22%</div>
            <div className="outer-div">
              <div style={{ "--height": "142px" }}></div>
            </div>
            <p>Iyl</p>
          </div>
          <div className="column active">
            <div className="percent">38%</div>
            <div className="outer-div">
              <div style={{ "--height": "207px" }}></div>
            </div>
            <p>Avg</p>
          </div>
          <div className="column">
            <div className="percent">23%</div>
            <div className="outer-div">
              <div style={{ "--height": "181px" }}></div>
            </div>
            <p>Sen</p>
          </div>
          <div className="column">
            <div className="percent">18%</div>
            <div className="outer-div">
              <div style={{ "--height": "152px" }}></div>
            </div>
            <p>Okt</p>
          </div>
          <div className="column">
            <div className="percent">27%</div>
            <div className="outer-div">
              <div style={{ "--height": "111px" }}></div>
            </div>
            <p>Noy</p>
          </div>
          <div className="column">
            <div className="percent">32%</div>
            <div className="outer-div">
              <div style={{ "--height": "168px" }}></div>
            </div>
            <p>Dek</p>
          </div>
        </div>
      </div>
      <div className="right-stat">
        <div className="right-header">
          <h2>O’quvchilar</h2>
          <span>Guruhdagi o’quchilar guruhi</span>
        </div>
        <div className="right-body">
          <div className="white-doira">
            <div className="blue-sector">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="200px"
                height="200px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#BB84EE" />
                    <stop offset="100%" stop-color="#4623E9" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="75" />
              </svg>
            </div>
            <div className="red-sector">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="200px"
                height="200px"
              >
                <defs>
                  <linearGradient id="GradientColor1">
                    <stop offset="0%" stop-color="#CDF4FF" />
                    <stop offset="100%" stop-color="#FF007A" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="73" />
              </svg>
            </div>
            <div className="gray-halqa">
              <h2>65%</h2>
              <span>Umumiy O’quvchilar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;
