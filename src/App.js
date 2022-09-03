import NavBar from "./components/NavBar";
import Main from "./components/Main";
import React, { useState } from "react";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [overlay, setOverlay] = useState(false);
  const [newHigh, setNewHigh] = useState(false);

  const Overlay = () => {
    let message = `You scored ${currentScore} points`;
    document.body.style.overflow = "hidden";

    if (currentScore >= 16)
      message = `Congratulations! You beat the game with ${currentScore} points`;
    else if (newHigh)
      message = `Congratulations! You broke the high-score with ${currentScore} points`;

    return (
      <div className="overlay">
        <div className="card">
          <div className="end-heading">Game Over!</div>
          <div className="end-score">{message}</div>
          <button onClick={updateCurrent.bind(null, 0)} className="restart-btn">
            Play Again
          </button>
        </div>
      </div>
    );
  };

  const updateCurrent = (score) => {
    if (score === currentScore) setOverlay(true);

    setCurrentScore(score);
    if (score > highScore) {
      setHighScore(score);
      setNewHigh(true);
    }

    if (score >= 16) setOverlay(true);
    if (score === 0) {
      setOverlay(false);
      setNewHigh(false);
      document.body.style.overflow = "visible";
    }
  };

  return (
    <div className="App">
      <NavBar currentScore={currentScore} highScore={highScore} />
      {overlay ? (
        <Overlay />
      ) : (
        <Main
          currentScore={currentScore}
          updateCurrent={updateCurrent}
          reset={overlay}
        />
      )}
    </div>
  );
}

export default App;
