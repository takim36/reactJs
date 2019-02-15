import React from 'react';
import PropTypes from 'prop-types';

const CustomButton = (props) => {
  const {
    buttonText,
    buttonClass,
    onClick,
  } = props;
  return (
    <button className={buttonClass} onClick={onClick}>
      {buttonText}
    </button>
  );
};

CustomButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

CustomButton.defaultProps = {
  onClick: () => {},
  buttonText:'',
};

export default CustomButton;
