import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

function Button({ className, link, btnText, btnType, onClick }) {
  return (
    <button href={link} type={btnType} onClick={onClick} className={className}>
      {btnText}
    </button>
  );
}

Button.propTypes = {
  btnType: PropTypes.string,
  className: PropTypes.string.isRequired,
  link: PropTypes.string,
  btnText: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  btnType: 'default',
  className: '',
  link: '/',
  btnText: ''
};

export default Button;
