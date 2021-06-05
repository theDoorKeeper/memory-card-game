import React, { useEffect, useState } from 'react'
import "../style/GameContainer.css"
import {imageArray,startingArray }from './imageArray' 
import randomNumber from './randomNumber';
function GameContainer() {
  
    const [images,setimages] = useState([]);
    const [cards,setCards]=useState([])
    const [score,setScore]=useState(0)


      const play = (cardID) => {
       images.forEach(image=>{
         if(image.id!==cardID){
           setScore(prevScore=>prevScore+1)
         }
         else setScore(0)
       })
      }

    const refreshId = (e) =>{  
      if (e.target!==e.currentTarget){
        let  array= [];
        play(e.target.id)
        for (let i = 0; i < 6; i++) {   
          console.log(array)
          let random = randomNumber(14,1);
                array.push(...imageArray.filter( img => img.id === random) )
              
         }
        
         setimages(array);}
         
   
    }
    useEffect(() => {  
         console.log(images) 
         setCards( images.map(card=> <img key={card.index} id={card.id} src={card.src} className="card" alt="card" /> ) )
      }, [images])

      useEffect(() => {
        setimages(startingArray) 
      }, [])



    return (
        <div className="wrapper" onClick={(e)=>{refreshId(e)}}> {cards} score : {score}</div>

    )
}

export default GameContainer
