/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { motion } from 'framer-motion';
import '../style/Score.css';

function Score(props) {
  const { score, highScore } = props;
  return (
    <motion.div className="scoreContainer" id="score" initial={{ y: '-200vw' }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
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
    </motion.div>
  );
}

export default Score;
