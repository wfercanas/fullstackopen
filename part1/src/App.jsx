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
  const { part1, part2, part3 } = props;
  return (
    <div>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </div>
  );
}
Content.propTypes = {
  part1: PropTypes.shape({
    name: PropTypes.string,
    exercises: PropTypes.number,
  }),
  part2: PropTypes.shape({
    name: PropTypes.string,
    exercises: PropTypes.number,
  }),
  part3: PropTypes.shape({
    name: PropTypes.string,
    exercises: PropTypes.number,
  }),
};

function Total(props) {
  return <p>Total number of exercises: {props.total}</p>;
}
Total.propTypes = {
  total: PropTypes.number,
};

function App() {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
}

export default App;
