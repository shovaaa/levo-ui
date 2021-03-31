import React from 'react';
import PropTypes from 'prop-types';

import './Paragraph.scss';

function Paragraph({ text, className }) {
  return (
    <div className="paragraph">
      <p className={className}>{text}</p>
    </div>
  );
}

Paragraph.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string.isRequired,
};

Paragraph.defaultProps = {
  text: '',
  className: ''
};

export default Paragraph;
