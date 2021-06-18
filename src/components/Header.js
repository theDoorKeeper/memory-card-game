/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { motion } from 'framer-motion';
import '../style/Header.css';
import Logo from '../assets/Logo_Ghibli.svg';

function Header() {
  return (
    <motion.div className="header" initial={{ y: '-200vw' }} animate={{ y: 0 }} transition={{ duration: 1.5 }}>
      <img src={Logo} alt="Ghibli studio logo" />
      <div className="tite">
        Memory card game
      </div>
    </motion.div>
  );
}

export default Header;
