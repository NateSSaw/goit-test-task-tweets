import PropTypes from 'prop-types';
export const Button = ({ onClick, className }) => {
  return (
    <button className={className} type="button" onClick={onClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};
