import { useState } from "react";
import PropTypes from "prop-types";

function Statistics(props) {
  const { good, neutral, bad, total } = props;
  return (
    <div>
      <h2>Statistics</h2>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {total}</p>
      <p>average: {(good - bad) / total}</p>
      <p>positive feedback: {(good / total) * 100}%</p>
    </div>
  );
}
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
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
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <Statistics good={good} bad={bad} neutral={neutral} total={total} />
    </div>
  );
}

export default App;
