import PropTypes from "prop-types";

function Note(props) {
  const { note } = props;
  return <li>{note.content}</li>;
}

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    important: PropTypes.bool,
  }),
};

export { Note };
