import React from "react";
import logo from "../LogoImage.png";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
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
          {/* <Button variant="contained" color="default"> */}
          <ArrowCircleRightOutlinedIcon
            color="secondary"
            onClick={triggerMainPage}
            className="mainPage-button-oneui"
          />
          {/* </Button> */}
        </div>
      </header>
    </div>
  );
};

export default MainPage;
