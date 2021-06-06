/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import '../style/Score.css';

function Score(props) {
  const { score, highScore } = props;
  return (
    <div className="scoreContainer" id="score">
      <div className="score">
        {' '}
        Score :
        {score}
      </div>
      <div className="highScore">
        {' '}
        HighScore :
        {highScore}
      </div>
    </div>
  );
}

export default Score;
