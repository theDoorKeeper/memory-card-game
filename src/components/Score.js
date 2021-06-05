import React from 'react'

function Score(props) {
    const {score,highScore} = props
    return (
        <div className="scoreContainer">
            Score : {score}
            Higschore : {highScore}
        </div>
    )
}

export default Score
