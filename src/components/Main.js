import React, { useState } from "react";

const Main = ({ currentScore, highScore, updateCurrent, updateHigh }) => {
  let items = [
    "batman",
    "black-panther",
    "daredevil",
    "deadpool",
    "dredd",
    "flash",
    "groot",
    "hellboy",
    "hulk",
    "ironman",
    "moon-knight",
    "naruto",
    "spawn",
    "spiderman",
    "vision",
    "yoda",
  ];

  const [selectedItems, setSelectedItems] = useState([]);

  const shuffle = (arr) => {
    let currentIndex = arr.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex],
        arr[currentIndex],
      ];
    }

    return arr;
  };
  return (
    <div className="content">
      {shuffle(items).map((item) => (
        <img src={require(`./icons/${item}.png`)} />
      ))}
    </div>
  );
};

export default Main;
