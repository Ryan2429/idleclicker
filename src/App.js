import React, { useState } from 'react'
import './Game.css'
import Knight from './components/Knight'
import skull from './components/skull1.png'
import ghost from './components/ghost1.png'
import robot from './components/robot1.png'
import knightBasic from './components/knight.png'
import knightAttack from './components/knightattack.png'
import MonsterBasic from './components/MonsterBasic'

function App() {

/*Function for Knight/User Attack and animation change and monster damage response*/
  const knights = { knightBasic, knightAttack }
  const monsters = [skull, ghost, robot]
  const [knightImage, setKnightImage] = useState(knights.knightBasic)
  

  function userAttack() {
    setKnightImage(knights.knightAttack);
    setTimeout(() => {
      setKnightImage(knights.knightBasic)
    }, 100);
    monsterAttacked(); 
  }

  const [monsterHealth, setMonsterHealth] = useState(100)
  const random = [Math.floor(Math.random() * monsters.length)]
  const [monsterImage, setMonsterImage] = useState(monsters.[random])
  const playerDamage = 15;


  function monsterAttacked() {
    if (monsterHealth - playerDamage <= 0) {
      setMonsterImage(monsters[random]);
      setMonsterHealth(100);
    } else {
      setMonsterHealth(monsterHealth - playerDamage);
    }
  }
 


  return (
    <div className="App">
    
      <div class='canvas'>
        <Knight userAttack={userAttack}
          knightImage={knightImage}/>
        <MonsterBasic
          userAttack={userAttack}
          monsterAttacked={monsterAttacked}
          monsterImage={monsterImage}
          monsterHealth={monsterHealth}
          />
      </div>

    </div>
  );
}

export default App;
