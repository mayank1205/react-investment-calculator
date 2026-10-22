export default function Search({handleChange, userInput}) {
    return (
        <div className="input-group">
            <div id="user-input">
                <div className="field">
                    <label>Initial Investment</label>
                    <input value={userInput.initialInvestment} onChange={(event) => handleChange('initialInvestment', event.target.value)} type="number" required id="input" />
                </div>
                    <div className="field">
                    <label>Annual Investment</label>
                <input value={userInput.annualInvestment} onChange={(event) => handleChange('annualInvestment', event.target.value)} type="number" required id="input" />
                </div>
                    <div className="field">
                    <label>Expected Return</label>
                <input value={userInput.expectedReturn} onChange={(event) => handleChange('expectedReturn', event.target.value)} type="number" required id="input" />
                </div>
                    <div className="field">
                    <label>Duration</label>
                <input value={userInput.duration} onChange={(event) => handleChange('duration', event.target.value)} type="number" required id="input" />
                </div>
            </div>
            
        </div>
    )
}