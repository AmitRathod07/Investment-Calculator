import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Result({ input }) {
  const resultData = calculateInvestmentResults(input);
  const initial_Investment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((res: any) => {
          const totalinterest =
            res.valueEndOfYear -
            res.annualInvestment * res.year -
            initial_Investment;

          const totalAmountInvested = res.valueEndOfYear - totalinterest;
          return (
            <tr key={res.year}>
              <td>{res.year}</td>
              <td>{formatter.format(res.valueEndOfYear)}</td>
              <td>{formatter.format(res.interest)}</td>
              <td>{formatter.format(totalinterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
