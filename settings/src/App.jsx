import * as React from "react";
import "./App.css";
import houseIcon from "./assets/houseIcon.png";
import vector1 from "./assets/vector1.svg";
import vector4 from "./assets/vector4.svg";
import vector5 from "./assets/vector5.svg";
import rectangle3 from "./assets/rectangle3.svg";
import vector3 from "./assets/vector3.svg";
import logoEepseo from "./assets/logoEepseo.png";
import basePage from "./assets/basePage.svg";
import rocketIcon from "./assets/rocketIcon.png";
import vector10 from "./assets/vector10.svg";
import vector2 from "./assets/vector2.svg";
import settingsIcon from "./assets/settingsIcon.png";
const App = () => {
  return (
    <div className="settings-page">
      <div className="cat-absolute-container">
        <div className="rectangle">
          <img className="logo-eepseo" src={logoEepseo} />
          <div className="flex-container">
            <img className="house-icon" src={houseIcon} />
            <button className="dashboard">
              <span className="dashboard-1">Dashboard</span>
            </button>
          </div>
          <div className="flex-container-1">
            <img className="rocket-icon" src={rocketIcon} />
            <div className="analytics">
              <span className="analytics-1">Analytics</span>
            </div>
          </div>
          <div className="flex-container-2">
            <img className="settings-icon" src={settingsIcon} />
            <button className="dashboard-1">
              <span className="settings">Settings</span>
            </button>
          </div>
        </div>
        <div className="flex-container-3">
          <div className="rectangle-4">
            <div className="rectangle-5">
              <span className="project">Project</span>
            </div>
            <span className="account">Account</span>
          </div>
          <div className="rectangle-1">
            <div className="rectangle-2">
              <img className="rectangle-3" src={rectangle3} />
              <span className="project-1">Project 1</span>
            </div>
            <span className="settings-1">Settings</span>
          </div>
          <div className="flex-container-4">
            <span className="project-name">Project name</span>
            <span className="geographic-area">Geographic area</span>
          </div>
          <div className="flex-container-5">
            <div className="flex-container-6">
              <input className="project-name-field" type="text" />
              <span className="subject-website">Subject website</span>
            </div>
            <select className="geographic-area-field-1">
              <img className="vector-10" src={vector10} />
            </select>
          </div>
          <div className="flex-container-7">
            <div className="flex-container-8">
              <input className="subject-website-field" type="text" />
              <span className="target-audience">Target audience</span>
            </div>
            <div className="flex-container-9">
              <span className="seed-keywords">Seed Keywords</span>
              <div className="flex-container-10">
                <div className="keyword-a-7">
                  <span className="test-drive">Test drive</span>
                  <img className="vector-9" src={vector5} />
                </div>
                <div className="keyword-a-6">
                  <span className="used-cars">Used cars</span>
                  <img className="vector-8" src={vector4} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-container-11">
            <input className="target-audience-field" type="text" />
            <div className="keyword-a-5">
              <span className="auto-loans">Auto loans</span>
              <img className="vector-7" src={vector3} />
            </div>
            <div className="keyword-a-4">
              <span className="car-dealership">Car dealership</span>
              <img className="vector-6" src={vector2} />
            </div>
          </div>
          <div className="flex-container-12">
            <div className="flex-container-13">
              <span className="geographic-area-1">Geographic area</span>
              <select className="geographic-area-field">
                <img className="vector-1" src={vector1} />
                <span className="us-midwest">US Midwest</span>
              </select>
            </div>
            <div className="flex-container-14">
              <div className="flex-container-15">
                <button className="keyword-e">
                  <div className="keyword-a-3">
                    <span className="car-reviews">Car reviews</span>
                    <img className="vector-5" src={vector5} />
                  </div>
                </button>
                <button className="keyword-f">
                  <div className="keyword-a-2">
                    <span className="online-car-shopping">
                      Online car shopping
                    </span>
                    <img className="vector-4" src={vector4} />
                  </div>
                </button>
              </div>
              <div className="flex-container-16">
                <div className="keyword-a-1">
                  <span className="car-promotions">Car promotions</span>
                  <img className="vector-3" src={vector3} />
                </div>
                <button className="keyword-h">
                  <div className="keyword-a">
                    <span className="auto-sales">Auto sales</span>
                    <img className="vector-2" src={vector2} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
