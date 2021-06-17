/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-plusplus */
import React, { useEffect } from 'react';
import '../style/GameContainer.css';

const GameContainer = (props) => {
  const {
    renderCards, compareCard, addtoGameCache, refreshId, cards,
    loadStartingImages,
  } = props;

  useEffect(() => {
    renderCards();
  }, [renderCards]);

  useEffect(() => {
    loadStartingImages();
  }, []);

  return (

    <div
      className="wrapper"
      onClick={(e) => {
        compareCard(e.target.id);
        addtoGameCache(e);
        refreshId(e);
      }}
    >
      {cards}
    </div>

  );
};

export default GameContainer;
