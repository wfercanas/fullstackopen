import PropTypes from "prop-types";

function Form(props) {
  const {
    handleSubmit,
    newName,
    handleNameChange,
    newNumber,
    handleNumberChange,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>name: {<input value={newName} onChange={handleNameChange} />}</div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func,
  newName: PropTypes.string,
  handleNameChange: PropTypes.func,
  newNumber: PropTypes.string,
  handleNumberChange: PropTypes.func,
};

export { Form };
