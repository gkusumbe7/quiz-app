import React, { useState } from "react";
import {questions} from "./Data/Data"
function App() {
  
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="flex flex-col justify-center items-center p-10 ">
      <h1 className="text-2xl font-bold">USA Quiz 🇺🇸</h1>
      <h2 className="text-xl font-md font-semibold">Score: {score}</h2>

      {showResults ? (
        <div className="bg-gray-500 shadow-xl p-10 text-white m-2 text-md rounded-xl flex flex-col gap-3 text-center font-semibold">
          <h1>Final Results</h1>
          <h2 className="text-center text-yellow-400 font-bold">
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button className="text-sm bg-gray-400 text-black font-semibold hover:bg-yellow-500 px-1 py-1 border-2 rounded-xl " onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        <div className="text-sm font-semibold bg-gray-400 rounded-xl p-5 m-2 mx-5 shadow-md text-white w-1/3">
          <h2 className="text-[17px] text-green-950 font-bold text-center m-3">
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="text-center font-serif text-[16px] mx-5 my-5">{questions[currentQuestion].text}</h3>

          <ul className="flex flex-col justify-center items-center gap-2 font-serif">
            {questions[currentQuestion].options.map((option) => {
              return (
                <li className="bg-gray-800 w-1/2 hover:bg-yellow-500 px-3 py-2 border-2  rounded-xl "
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
