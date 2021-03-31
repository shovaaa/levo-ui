import React from 'react';
import PropTypes from 'prop-types';

import './MainTitle.scss';

function MainTitle({ titleText, className }) {
  return (
    <div className="mainTitle">
      <h1 className={className}>{titleText}</h1>
    </div>
  );
}

MainTitle.propTypes = {
  titleText: PropTypes.string,
  className: PropTypes.string.isRequired,
};

MainTitle.defaultProps = {
  titleText: '',
  className: ''
};

export default MainTitle;
