import React from "react";

const NavBar = ({ highScore, currentScore }) => {
  return (
    <div class="nav-bar">
      <div class="heading">Superhero Memory</div>
      <div class="score">
        <div class="best-score">High Score: {highScore}</div>
        <div class="current-score">Current Score: {currentScore}</div>
      </div>
    </div>
  );
};

export default NavBar;
