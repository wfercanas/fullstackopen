import PropTypes from "prop-types";

function List(props) {
  const { filteredPersons, onDelete } = props;
  return (
    <>
      {filteredPersons.map((person) => (
        <div key={person.id}>
          <p>
            {person.name} - {person.number}
          </p>
          <button onClick={() => onDelete(person.id)}>delete</button>
        </div>
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
  onDelete: PropTypes.func,
};

export { List };
