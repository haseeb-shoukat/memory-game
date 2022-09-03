import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Main = ({ currentScore, updateCurrent }) => {
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

  const processClick = (name) => {
    const found = selectedItems.find((n) => n === name);
    if (found === undefined) {
      setSelectedItems([...selectedItems, name]);
      updateCurrent(currentScore + 1);
    }
  };

  return (
    <div className="content">
      {shuffle(items).map((name, index) => (
        <img
          key={index}
          onClick={processClick.bind(null, name)}
          src={require(`./icons/${name}.png`)}
        />
      ))}
    </div>
  );
};

export default Main;
