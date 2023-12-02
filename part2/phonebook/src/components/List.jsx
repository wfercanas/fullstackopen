import PropTypes from "prop-types";

function List(props) {
  const { filteredPersons } = props;
  return (
    <>
      {filteredPersons.map((person) => (
        <p key={person.id}>
          {person.name} - {person.number}
        </p>
      ))}
    </>
  );
}

List.propTypes = {
  filteredPersons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};

export { List };
