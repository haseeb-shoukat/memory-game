import React from "react";

const NavBar = ({ highScore, currentScore }) => {
  return (
    <div className="nav-bar">
      <div className="heading">Superhero Memory</div>
      <div className="score">
        <div className="best-score">High Score: {highScore}</div>
        <div className="current-score">Current Score: {currentScore}</div>
      </div>
    </div>
  );
};

export default NavBar;
