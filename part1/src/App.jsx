import PropTypes from "prop-types";

function Header(props) {
  return <h1>{props.course}</h1>;
}
Header.propTypes = {
  course: PropTypes.string,
};

function Part(props) {
  const { part } = props;
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
}
Part.propTypes = {
  part: PropTypes.shape({
    name: PropTypes.string,
    exercises: PropTypes.number,
  }),
};

function Content(props) {
  const { parts } = props;
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
    </div>
  );
}
Content.propTypes = {
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      exercises: PropTypes.number,
    })
  ),
};

function Total(props) {
  const total = props.parts
    .map((part) => part.exercises)
    .reduce((acc, curr) => acc + curr);
  return <p>Total number of exercises: {total}</p>;
}
Total.propTypes = {
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      exercises: PropTypes.number,
    })
  ),
};

function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App;
