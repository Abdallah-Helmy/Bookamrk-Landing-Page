import React from 'react';
import './Question.css';
import questions from './data';
import { FAQS } from './FAQS';

export const Questions = () => {
  return (
    <>
      <div className="questions justify-content-center">
        <div className="info">
          <h2>frequently asked questions</h2>
          <p>Here are some of our FAQs. if you have any other questions you'd like answered please feel free to email us</p>
        </div>
        <div className="q-a">
          <hr />
          {questions.map(question => {
            return <FAQS key={question.id} {...question} />;
          })}
        </div>
        <div className="more-info-btn text-center">
          <button className="btn text-capitalize">more info</button>
        </div>
      </div>
    </>
  );
};
