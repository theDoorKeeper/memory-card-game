/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import GameContainer from './components/GameContainer';
import Header from './components/Header';
import Rules from './components/Rules';
import './style/App.css';
import { imageArray, startingArray } from './components/imageArray';
import randomNumber from './components/randomNumber';

function App() {
  const [images, setimages] = useState([]);
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
    if (e.target !== e.currentTarget) {
      const array = [];
      for (let i = 0; i < 6; i++) {
        const random = randomNumber(14, 1);
        array.push(...imageArray.filter((img) => img.id === random));
      }

      setimages(array);
    }
  };

  const renderCards = () => setCards(images.map((card) => (
    <div className="card-wrapper">
      <img key={card.index} id={card.id} src={card.src} className="card" alt="card" />
      <div className="card-name"> someNAme</div>
    </div>
  )));

  const loadStartingImages = () => {
    setimages(startingArray);
  };

  return (
    <div className="App">
      <Header />
      <Rules />
      <GameContainer
        renderCards={renderCards}
        refreshId={refreshId}
        compareCard={compareCard}
        addtoGameCache={addtoGameCache}
        loadStartingImages={loadStartingImages}
        score={score}
        highScore={highScore}
        cards={cards}
      />
    </div>
  );
}

export default App;
