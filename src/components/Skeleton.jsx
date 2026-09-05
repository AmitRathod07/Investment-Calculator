import React from "react";
import Header from "./Header.jsx";
import Calculation from "./Calculation.jsx";
import Result from "./Result.jsx";

function Skeleton() {
  const [userInput, setUserInput] = React.useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function onClickChange(newValue, inputIdentifier) {
    setUserInput((prevInput) => {
      return { ...prevInput, [inputIdentifier]: +newValue };
    });
  }

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <Calculation onChange={onClickChange} userInput={userInput} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Result input={userInput} />}
    </>
  );
}

export default Skeleton;
