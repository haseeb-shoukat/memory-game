import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Main = ({ currentScore, highScore, updateCurrent, updateHigh }) => {
  let items = [
    { key: uuidv4(), name: "batman" },
    { key: uuidv4(), name: "black-panther" },
    { key: uuidv4(), name: "daredevil" },
    { key: uuidv4(), name: "deadpool" },
    { key: uuidv4(), name: "dredd" },
    { key: uuidv4(), name: "flash" },
    { key: uuidv4(), name: "groot" },
    { key: uuidv4(), name: "hellboy" },
    { key: uuidv4(), name: "hulk" },
    { key: uuidv4(), name: "ironman" },
    { key: uuidv4(), name: "moon-knight" },
    { key: uuidv4(), name: "naruto" },
    { key: uuidv4(), name: "spawn" },
    { key: uuidv4(), name: "spiderman" },
    { key: uuidv4(), name: "vision" },
    { key: uuidv4(), name: "yoda" },
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
      {shuffle(items).map(({ key, name }) => (
        <img key={key} src={require(`./icons/${name}.png`)} />
      ))}
    </div>
  );
};

export default Main;
