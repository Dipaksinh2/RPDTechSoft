import React from "react";
import logo from "../LogoImage.png";
import "../App.css";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const triggerMainPage = () => {
    navigate("/home");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <button
            type="button"
            className="mainPage-button-oneui"
            name="mainPageBtn"
            onClick={triggerMainPage}
          >
            Main Page
          </button>
        </div>
      </header>
    </div>
  );
};

export default MainPage;
