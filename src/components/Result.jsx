import { useEffect, useState } from "react";
import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Result({userInput}) {

    const data = calculateInvestmentResults(userInput);
    const initialInvestment = data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;



    return (
        <table id="result">
            <thead>
                <tr>
                    <td>Year</td>
                    <td>Investment Value</td>
                    <td>Interest(Year)</td>
                    <td>Total Interest</td>
                    <td>Invested Capital</td>
                </tr>
            </thead>
            <tbody>
                {data.map(element => {
                    const totalInterest = element.valueEndOfYear - initialInvestment - (userInput.annualInvestment * element.year);
                    const totalAmountInvested = element.valueEndOfYear - totalInterest;
                  return (
                    <tr key={element.year}>
                    <td>{element.year}</td>
                    <td>{ formatter.format(element.valueEndOfYear)}</td>
                    <td>{formatter.format(element.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                  </tr>
                  )
                })}
            </tbody>
        </table>
    )
}