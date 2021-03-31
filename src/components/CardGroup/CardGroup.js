import React, { useState } from 'react';
import Card from '../Common/Card/Card';
import Button from '../Common/Button/Button';

import dummyData from './dummyData';

import './CardGroup.scss';

function CardGroup() {

  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container">
      <div className="row">
        {(showMore ? dummyData : dummyData.slice(0, 3)).map((data) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mt-4" key={data.id}>
              <Card
                cardColor={data.cardColor}
                headerText={data.headerText}
                titleText={data.titleText}
                cardText={data.text} />
            </div>
          ))
        }
      </div>
      <div className="row mt-5">
        <Button
          className="btn btn-outline-danger btn--uppercase btn--center btn--large"
          link="/"
          btnText={!showMore ? "Read More" : "Read Less"}
          btnType="button"
          onClick={() => { setShowMore(!showMore) }} />
      </div>
    </div >
  );
}

export default CardGroup;
