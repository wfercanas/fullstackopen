import PropTypes from "prop-types";

function Notification(props) {
  const { message } = props;

  if (message == null) {
    return null;
  }

  return <div className="error">{message}</div>;
}

Notification.propTypes = {
  message: PropTypes.string,
};

export { Notification };
