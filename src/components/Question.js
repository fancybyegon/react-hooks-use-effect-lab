import React, { useState, useEffect } from "react";


function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
 
useEffect(() => {
  // Only start the timer if timeRemaining is greater than 0
  if (timeRemaining > 0) {
    const timerId = setTimeout(() => {
      setTimeRemaining(timeRemaining - 1);
    }, 1000);

    return () => clearTimeout(timerId); // Clean up timeout
  } else {
    // Time ran out
    setTimeRemaining(10);       // Reset timer
    onAnswered(false);          // Trigger callback
  }
}, [timeRemaining, onAnswered]); // Dependencies


  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;