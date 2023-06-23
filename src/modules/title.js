import React from "react";
import "../styles/title.css";
import treat from "../img/treat.png";

export default function Title() {
  return (
    <div className="title_container">
      <h1 className="title">
        <img className="title--treat_icon" src={treat}></img> Memory Treats{" "}
        <img className="title--treat_icon" src={treat}></img>
      </h1>
    </div>
  );
}
