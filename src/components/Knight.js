import React from 'react';
import '../Game.css'
import HealthBar from '../HealthBar.js'

const Knight = ({ userAttack, knightImage }) => {
    

    return (
        <div id='player'>
        <HealthBar id="player-hp" value={50}/>
            <img class='knight-img' src={knightImage} alt='knight'
             onClick={userAttack}
              />
        </div>
    )
}

export default Knight;