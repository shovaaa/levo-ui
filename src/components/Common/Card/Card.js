import React from 'react';
import Button from '../Button/Button'

import './Card.scss';

function Card({ headerText, titleText, cardText, cardColor }) {

  return (
    <div className="card text-white h-100" style={{backgroundColor: `${cardColor}`}}>
      <div className="card-header card_header">{headerText}</div>
      <div className="card-body">
        <h5 className="card-title card_title">{titleText}</h5>
        <p className="card-text card_text">{cardText}</p>
      </div>
      <div className="card-footer card_footer">
        <Button 
        className="btn btn-outline-light btn--small btn--uppercase" 
        link="/" 
        btnText="Read More"  
        btnType="submit" />
      </div>
    </div>
  );
}

export default Card;
