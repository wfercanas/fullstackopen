import PropTypes from "prop-types";

function Header(props) {
  return <h1>{props.course}</h1>;
}
Header.propTypes = {
  course: PropTypes.string,
};

function Content(props) {
  const { part1, part2, part3, exercises1, exercises2, exercises3 } = props;
  return (
    <>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
    </>
  );
}
Content.propTypes = {
  part1: PropTypes.string,
  part2: PropTypes.string,
  part3: PropTypes.string,
  exercises1: PropTypes.number,
  exercises2: PropTypes.number,
  exercises3: PropTypes.number,
};

function Total(props) {
  return <p>Total number of exercises: {props.total}</p>;
}
Total.propTypes = {
  total: PropTypes.number,
};

function App() {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
}

export default App;
