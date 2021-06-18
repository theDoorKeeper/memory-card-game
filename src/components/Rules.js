/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { motion } from 'framer-motion';
import '../style/Rules.css';

function Rules() {
  return (
    <motion.div className="rules" initial={{ y: '-200vw' }} animate={{ y: 0 }} transition={{ duration: 1 }}>
      <p style={{ fontWeight: 'bold' }}> Rules </p>
      click on a charachter to begin,
      if you click twice on the same charachter you'll loose the game . good luck!
    </motion.div>
  );
}

export default Rules;
