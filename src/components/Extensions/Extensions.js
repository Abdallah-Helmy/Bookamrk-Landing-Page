import React from 'react';
import './Extensions.css';
import Card from 'react-bootstrap/Card';
import data from './data';

export const Extensions = () => {
  return (
    <>
      <div className="extensions" id="extensions">
        <div className="info">
          <h2>download the extension</h2>
          <p>We've got more browsers in the pipeline. please do let us know if you've got a favourite you'd like us to prioritize</p>
        </div>
        <div className="container">
          <div className="cards row m-0 d-flex justify-content-evenly mt-5 text-center">
            {data.map(card => {
              const { id, img, header, text } = card;
              return (
                <Card className="col-4" style={{ width: '18rem' }} key={id}>
                  <Card.Img variant="top" src={img} />
                  <h3>{header}</h3>
                  <p>{text}</p>
                  <button className="btn">add & install extension</button>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
