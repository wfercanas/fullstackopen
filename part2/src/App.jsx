import PropTypes from "prop-types";

const Header = (props) => {
  const { course } = props;
  return <h1>{course.name}</h1>;
};
Header.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    parts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        exercises: PropTypes.number,
        id: PropTypes.number,
      })
    ),
  }),
};

const Total = (props) => {
  const { parts } = props;
  return (
    <p>
      Number of exercises{" "}
      {parts.map((part) => part.exercises).reduce((acc, curr) => acc + curr)}
    </p>
  );
};
Total.propTypes = {
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      exercises: PropTypes.number,
      id: PropTypes.number,
    })
  ),
};

const Part = (props) => {
  const { part } = props;
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};
Part.propTypes = {
  part: PropTypes.shape({
    name: PropTypes.string,
    exercises: PropTypes.number,
    id: PropTypes.number,
  }),
};

const Content = (props) => {
  const { parts } = props;
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};
Content.propTypes = {
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      exercises: PropTypes.number,
      id: PropTypes.number,
    })
  ),
};

const Course = (props) => {
  const { course } = props;

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};
Course.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    parts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        exercises: PropTypes.number,
        id: PropTypes.number,
      })
    ),
  }),
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
