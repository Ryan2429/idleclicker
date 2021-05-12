import React from 'react';
import '../Game.css'
import HealthBar from '../HealthBar.js'

const MonsterBasic = ({ userAttack, monsterAttacked, monsterImage, monsterHealth }) => {

    return (
        <div id="monster">
        <HealthBar id="monster-hp" value={monsterHealth} max={100} />
          <img class='monster-img' src={ monsterImage } alt='skull' />
        </div>
    )
}

export default MonsterBasic;