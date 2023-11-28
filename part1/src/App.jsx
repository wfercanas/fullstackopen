import { useState } from "react";
import PropTypes from "prop-types";

function StatisticLine(props) {
  const { text, value, unit } = props;
  return (
    <p>
      {text}: {value} {unit}
    </p>
  );
}
StatisticLine.propTypes = {
  text: PropTypes.string,
  value: PropTypes.number,
  unit: PropTypes.string,
};

function Statistics(props) {
  const { good, neutral, bad, total } = props;
  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <h2>Statistics</h2>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={(good - bad) / total} />
      <StatisticLine
        text="positive feedback"
        value={(good / total) * 100}
        unit="%"
      />
    </div>
  );
}
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
};

function Button(props) {
  const { onClick, label } = props;
  return <button onClick={onClick}>{label}</button>;
}
Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let total = good + neutral + bad;

  function handleGood() {
    setGood(good + 1);
  }

  function handleNeutral() {
    setNeutral(neutral + 1);
  }

  function handleBad() {
    setBad(bad + 1);
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGood} label="good" />
      <Button onClick={handleNeutral} label="neutral" />
      <Button onClick={handleBad} label="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} total={total} />
    </div>
  );
}

export default App;
