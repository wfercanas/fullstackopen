import PropTypes from "prop-types";

function Note(props) {
  const { note, toggleImportance } = props;
  const label = note.important ? "make not important" : "make important";
  return (
    <li>
      {note.content} <button onClick={toggleImportance}>{label}</button>
    </li>
  );
}

Note.propTypes = {
  toggleImportance: PropTypes.func,
  note: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    important: PropTypes.bool,
  }),
};

export { Note };
