import "./styles.css";
import React, { useState } from "react";

const FlashCard = ({ question, answer }) => {
  const [isFlip, setIsFilp] = useState(false);
  return (
    <div
      className={isFlip ? "card-filp" : "card"}
      onClick={() => setIsFilp((f) => !f)}
    >
      {isFlip ? <p>{answer}</p> : <p>{question}</p>}
    </div>
  );
};

const cards = [
  {
    question: "q1?????",
    answer: "ans1111",
  },
  {
    question: "q2?????",
    answer: "ans2221",
  },
  {
    question: "q3?????",
    answer: "ans3311",
  },
  {
    question: "q4?????",
    answer: "ans444",
  },
];

const CardList = ({ cards }) => {
  return (
    <div className="cards">
      {cards.map((item, idx) => (
        <FlashCard question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <CardList cards={cards} />
    </div>
  );
}
