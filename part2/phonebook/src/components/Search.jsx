import PropTypes from "prop-types";

function Search(props) {
  const { value, onChange } = props;
  return (
    <input
      value={value}
      onChange={onChange}
      type="search"
      placeholder="search"
    />
  );
}

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export { Search };
