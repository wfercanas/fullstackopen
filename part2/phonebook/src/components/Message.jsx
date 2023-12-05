import PropTypes from "prop-types";

function Message(props) {
  const { message } = props;

  if (!message) {
    return null;
  }

  return (
    <div className="message">
      <p>{message}</p>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.string,
};

export { Message };
