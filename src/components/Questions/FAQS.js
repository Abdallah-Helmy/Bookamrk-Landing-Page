import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export const FAQS = ({ header, text }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="question mb-3">
      <div className="question-info d-flex justify-content-between">
        <h2>{header}</h2>
        <FontAwesomeIcon className={showAnswer ? 'up' : 'down'} icon={showAnswer ? faChevronUp : faChevronDown} onClick={() => setShowAnswer(!showAnswer)} />
      </div>
      <div className="question-answer">{showAnswer && text}</div>
      <hr />
    </div>
  );
};
