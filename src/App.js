import NavBar from "./components/NavBar";
import Main from "./components/Main";
import React, { useState } from "react";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const updateCurrent = (score) => {
    setCurrentScore(score);
    if (score > highScore) setHighScore(score);
  };

  return (
    <div className="App">
      <NavBar currentScore={currentScore} highScore={highScore} />
      <Main currentScore={currentScore} updateCurrent={updateCurrent} />
    </div>
  );
}

export default App;
