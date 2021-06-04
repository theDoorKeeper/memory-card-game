import React, { useEffect, useState } from 'react'
import "../style/GameContainer.css"
import {imagArray,startingArray }from './imageArray' 
function GameContainer() {

    const [id,setId] = useState([]);
    const [cards,setCards]=useState([])
    
    const refreshId = () =>{
        let  array= [];
       
        for (let i = 0; i < 6; i++) {
         if(id.length){
            array.length=0;
        }
                array.push (...imagArray.filter( img =>img.id===(Math.floor(Math.random() * (14 - 1 + 1)) + 1) ) )
         }
         console.log('array',array)
        
         setId(array)
   
    }
    useEffect(() => {  
        console.log(id)
         setCards( id.map(card=> <img key={card.id} id={card.id} src={card.src} className="card" alt="card" /> ) )
      }, [id])

      useEffect(() => {
        setId(startingArray) 
      }, [])



    return (
        <div className="wrapper" onClick={()=>{refreshId()}}> { cards ? cards : null} </div>

    )
}

export default GameContainer
