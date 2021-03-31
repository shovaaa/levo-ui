import React, { useState } from 'react';
import './CardGroup.scss';
import Card from '../Common/Card/Card';
import Button from '../Common/Button/Button';

function CardGroup() {

  const [showMore, setShowMore] = useState(false);

  console.log(showMore);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
          <Card
            cardColor="#ed9d26"
            headerText="12 Sep 2018"
            titleText="Love of learning, art keys to a great year for Gwen"
            cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
          <Card
            cardColor="#61aee8"
            headerText="13 Sep 2018"
            titleText="Love of learning"
            cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
          <Card
            cardColor="#b07bd1"
            headerText="14 Sep 2018"
            titleText="Love of learning, art keys to a great year for Gwen"
            cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </div>
      </div>

      { showMore && (
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
            <Card
              cardColor="#f52f59"
              headerText="15 Sep 2018"
              titleText="Love of learning, art keys to a great year for Gwen"
              cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
            <Card
              cardColor="#41c22b"
              headerText="16 Sep 2018"
              titleText="Love of learning, art keys to a great year for Gwen"
              cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
            <Card
              cardColor="#e86bc2"
              headerText="17 Sep 2018"
              titleText="Love of learning"
              cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          </div>
        </div>
      )
      }

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
