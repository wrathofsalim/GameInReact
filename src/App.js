import './App.css';
import { useEffect, useState } from 'react';
import Enemies from './Components/Enemies/Enemies';
import Player from './Components/Player/Player';

function App() {
  const [wave, setWave] = useState(0);
  const [playerAttackDamage, setPlayerAttackDamage] = useState(2);
  const [gameState, setGameState] = useState(0);
  const [playerMaxHealth, setPlayerMaxHealth] = useState(10);
  const [playerHealth, setPlayerHealth] = useState(10);
  const [level, setLevel] = useState(1);
  const [playerExp, setPlayerExp] = useState(0);
  const [message, setMessage] = useState("The game started.");

  const NextWave = () => {
    setWave(wave + 1);
    setMessage('')
  }

  const Win = () => {
    setGameState(1);
    setMessage("CONGRATULATIONS! YOU WON !!!")
  }

  const Lose = () => {
    setGameState(2);
    setMessage("YOU ARE DEAD!! GAME OVER!")
  }

  const Attack = (dmg) => {
    setPlayerHealth(playerHealth - dmg);
    setMessage(`You did ${playerAttackDamage} to enemy.\nEnemy did ${dmg} to you.`)
  }

  const HealPlayer = (dmg) => {
    setPlayerHealth(playerMaxHealth - dmg)
  }

  useEffect(() => {
    if (playerHealth <= 0) {
      Lose();
    }
  }, [playerHealth])


  const LevelUp = (exp) => {
    let expLeft;
    let combinedExp = exp + playerExp;
    if (level == 1) {
      if (combinedExp >= 10) {
        expLeft = combinedExp - 10;
        setPlayerExp(expLeft);
        setPlayerAttackDamage(playerAttackDamage + 1);
        setPlayerMaxHealth(playerMaxHealth + 5);
        setLevel(level + 1);
      } else {
        setPlayerExp(combinedExp);
      }
    }
    if (level == 2) {
      if (combinedExp >= 20) {
        expLeft = combinedExp - 20;
        setPlayerExp(expLeft);
        setPlayerAttackDamage(playerAttackDamage + 2);
        setPlayerMaxHealth(playerMaxHealth + 15);
        setLevel(level + 1);
      } else {
        setPlayerExp(combinedExp);
      }
    }
    if (level == 3) {
      if (combinedExp >= 30) {
        expLeft = combinedExp - 30;
        setPlayerExp(expLeft);
        setPlayerAttackDamage(playerAttackDamage + 3);
        setPlayerMaxHealth(playerMaxHealth + 5);
        setLevel(level + 1);
      } else {
        setPlayerExp(combinedExp);
      }
    }
    if (level == 4) {
      if (combinedExp >= 40) {
        expLeft = combinedExp - 40;
        setPlayerExp(expLeft);
        setPlayerAttackDamage(playerAttackDamage + 5);
        setPlayerMaxHealth(playerMaxHealth + 10);
        setLevel(level + 1);
      } else {
        setPlayerExp(combinedExp);
      }
    }
    if (level == 5) {
      if (combinedExp >= 50) {
        expLeft = combinedExp - 50;
        setPlayerExp("Max Level");
        setPlayerAttackDamage(playerAttackDamage + 5);
        setPlayerMaxHealth(playerMaxHealth + 5);
        setLevel(level + 1);
      } else {
        setPlayerExp("Max Level");
      }
    }

  }

  let enemy = <Enemies
    id={`${wave}`}
    playerAttackDamage={playerAttackDamage}
    nextWave={NextWave}
    attack={Attack}
    exp={LevelUp}
    wave={wave}
    healPlayer={HealPlayer}
    win={Win}
    gameState={gameState}
  />

  let player = <Player
    name={"Player"}
    attack={playerAttackDamage}
    health={playerHealth}
    maxHealth={playerMaxHealth}
    exp={playerExp}
    level={level}
    gameState={gameState}
  />

  useEffect(() => {
    enemy = <Enemies
      id={`${wave}`}
      playerAttackDamage={playerAttackDamage}
      nextWave={NextWave}
      attack={Attack}
      exp={LevelUp}
      wave={wave}
      healPlayer={HealPlayer}
      win={Win}
      gameState={gameState}
    />
    setMessage(` Enemy ${wave + 1} spawned!`)

  }, [wave])


  useEffect(() => {
    player =
      <Player
        name={"Player"}
        attack={playerAttackDamage}
        health={playerHealth}
        maxHealth={playerMaxHealth}
        exp={playerExp}
        level={level}
        gameState={gameState}
      />

    enemy =
      <Enemies
        id={`${wave}`}
        playerAttackDamage={playerAttackDamage}
        nextWave={NextWave}
        attack={Attack}
        exp={LevelUp}
        wave={wave}
        healPlayer={HealPlayer}
        win={Win}
        gameState={gameState}
      />

  }, [gameState])

  const ReloadPage=()=>{
    window.location.reload(false);
  }

  return (
    <div className='mainContainer'>
      <div className='cardsContainer'>
        {player}
        {enemy}
      </div>
      <div className='messageContainer'>
        {gameState == 0 ? `${message}` : ''}
        {gameState == 1 ? "You WON" : ''}
        {gameState == 2 ? "Game Over" : ''}

      </div>
      {gameState == 1 ? <button className='button' onClick={ReloadPage}>Restart</button> : ''}
      {gameState == 2 ? <button className='button' onClick={ReloadPage}>Restart</button> : ''}

    </div>
  );
}

export default App;
