import Header from "./components/Header"
import Search from "./components/Search"
import Result from "./components/Result"
import { calculateInvestmentResults } from "./util/investment";
import { useEffect, useState } from "react";

function App() {

  
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const isValidInput = userInput.initialInvestment >= 0 && userInput.annualInvestment >= 0 && userInput.expectedReturn >= 0 && userInput.duration >= 0;

  function handleChange(inputIdentifier, newValue) {
    return setUserInput((prevState) => ({
      ...prevState,
      [inputIdentifier]: +newValue
    }));
  }


  return (
    <>
    <Header></Header>
    <Search handleChange = {handleChange} userInput={userInput}></Search>
    {!isValidInput && <p id="result" style={{textAlign: "center"}}>Please enter valid input values.</p>}
    {isValidInput && <Result userInput={userInput}></Result>}
    </>
  )
}

export default App
