import React, { useEffect, useState } from 'react'
import "../style/GameContainer.css"
import {imageArray,startingArray }from './imageArray' 
import randomNumber from './randomNumber';
function GameContainer() {
    const [cacheArray,setCacheArray]=useState([])
    const [images,setimages] = useState([]);
    const [cards,setCards]=useState([])
    const [score,setScore]=useState(0)


      const compareCard = (cardID) => {
       if( cacheArray.includes(cardID) ){
         setScore(0)
       }
       else {
         setScore(prevScore=>prevScore+1)
       }
      }

    const refreshId = (e) =>{  
      if (e.target!==e.currentTarget){
        let  array= [];
        for (let i = 0; i < 6; i++) {   
          /* console.log(array) */
          let random = randomNumber(14,1);
                array.push(...imageArray.filter( img => img.id === random) )
              
         }
        
         setimages(array);}
    }

    const addtoGameCache = (e)=>{
      setCacheArray(previousArray => previousArray.concat(e.target.id))
    }
    useEffect(() => {  
        /*  console.log(images)  */
         setCards( images.map(card=> <img key={card.index} id={card.id} src={card.src} className="card" alt="card" /> ) )
      }, [images])

      useEffect(() => {
        setimages(startingArray) 
      }, [])



    return (
        <div className="wrapper" onClick={(e)=>{
          compareCard(e.target.id);
          addtoGameCache(e);
          refreshId(e)}}> {cards} score : {score}</div>

    )
}

export default GameContainer
