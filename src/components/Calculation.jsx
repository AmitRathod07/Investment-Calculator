import React from "react";

export default function Calculation({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">INITIAL INVESTMENT</label>
          <input
            id="initial-investment"
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange(event.target.value, "initialInvestment")
            }
          />
        </p>
        <p>
          <label htmlFor="annual-investment">ANNUAL INVESTMENT</label>
          <input
            id="annual-investment"
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange(event.target.value, "annualInvestment")
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">EXPECTED RETURN</label>
          <input
            id="expected-return"
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) => onChange(event.target.value, "expectedReturn")}
          />
        </p>
        <p>
          <label htmlFor="duration">DURATION</label>
          <input
            id="duration"
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChange(event.target.value, "duration")}
          />
        </p>
      </div>
    </section>
  );
}
