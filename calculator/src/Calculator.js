import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const currentResult = eval(input).toString();
        setInput(""); // Set the input to the result
        setResult(currentResult);
      } catch (error) {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "DEL") {
      // Delete the last character from the input
      setInput((prevInput) => prevInput.slice(0, -1));
    } else if (/[+*/%-]/.test(value) && /[+*/%-]/.test(input.slice(-1))) {
      // If the clicked value is an operation and the last character is also an operation
      // Display an error or handle it as needed
      setInput("Error: Invalid Input");
    } else if (value === "0" && input === "0") {
      // Prevent adding multiple zeros at the beginning
      return;
    } else if (value === "0" && input === "") {
      // Prevent adding zero at the beginning
      setInput("0");
    } else {
      // Check if there's a result, treat it as the new input and append the operation
      if (result !== "") {
        setInput(result + value);
        setResult("");
      } else {
        // Append the clicked value to the input
        setInput((prevInput) => prevInput + value);
      }
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="result">{result}</div>
        <div className="input-container">
          <input type="text" value={input} readOnly />
        </div>
      </div>
      <div className="buttons">
        <button onClick={() => handleButtonClick("C")}>C</button>
        <button onClick={() => handleButtonClick("DEL")}>DEL</button>{" "}
        <button onClick={() => handleButtonClick("%")}>%</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={() => handleButtonClick("=")} className="output">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
