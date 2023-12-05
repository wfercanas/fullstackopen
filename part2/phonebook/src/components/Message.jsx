import PropTypes from "prop-types";

function Message(props) {
  const { message } = props;
  const className = `message ${message?.type}`;

  if (!message) {
    return null;
  }

  return (
    <div className={className}>
      <p>{message?.content}</p>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.shape({
    content: PropTypes.string,
    type: PropTypes.string,
  }),
};

export { Message };
