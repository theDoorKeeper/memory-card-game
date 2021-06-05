import React, { useEffect, useState } from 'react'
import "../style/GameContainer.css"
import {imageArray,startingArray }from './imageArray' 
import randomNumber from './randomNumber';
function GameContainer() {
  
    const [id,setId] = useState([]);
    const [cards,setCards]=useState([])
    
    const refreshId = () =>{  
      let  array= [];
        for (let i = 0; i < 6; i++) {   
          console.log(array)
          let random = randomNumber(14,1);
                array.push(...imageArray.filter( img => img.id === random) )
              
         }
        
         setId(array);
         
   
    }
    useEffect(() => {  
         console.log(id) 
         setCards( id.map(card=> <img key={card.index} id={card.id} src={card.src} className="card" alt="card" /> ) )
      }, [id])

      useEffect(() => {
        setId(startingArray) 
      }, [])



    return (
        <div className="wrapper" onClick={()=>{refreshId()}}> {cards} </div>

    )
}

export default GameContainer
