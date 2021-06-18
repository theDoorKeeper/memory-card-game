/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { motion } from 'framer-motion';
import GameContainer from './components/GameContainer';
import Header from './components/Header';
import Rules from './components/Rules';
import Score from './components/Score';
import './style/App.css';
import { imageArray } from './components/imageArray';
import randomNumber from './components/randomNumber';

function App() {
  const [images, setImages] = useState([]);
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighscore] = useState(0);
  const [cacheArray, setCacheArray] = useState([]);

  const compareCard = (cardID) => {
    if (cacheArray.includes(cardID)) {
      if (!highScore || score > highScore) {
        setHighscore(score);
      }
      setScore(0);
      setCacheArray([]);
    } else {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const addtoGameCache = (e) => {
    setCacheArray((previousArray) => previousArray.concat(e.target.id));
  };

  const refreshId = (e) => {
    if (e.target !== e.currentTarget && e.target.className === ('card')) {
      const array = [];
      for (let i = 0; i < 5; i++) {
        const random = randomNumber(16, 1);
        array.push(...imageArray.filter((img) => img.id === random));
      }

      setImages(array);
    }
  };

  const renderCards = () => setCards(images.map((card) => (
    <motion.div whileHover={{ borderColor: '#4688ce', boxShadow: '0 0 15px #4688ce ', rotateX: 25 }} className="card-wrapper">
      <motion.img key={card.index} id={card.id} src={card.src} className="card" alt="card" animate={{ rotate: 360 }} initial={{ rotate: 0 }} />
      <div className="card-name"> someNAme</div>
    </motion.div>
  )));

  return (
    <div className="App">
      <Header />
      <Rules />
      <Score score={score} highScore={highScore} />
      <GameContainer
        renderCards={renderCards}
        refreshId={refreshId}
        compareCard={compareCard}
        addtoGameCache={addtoGameCache}
        setImages={setImages}
        score={score}
        highScore={highScore}
        cards={cards}
      />
    </div>
  );
}

export default App;
