import React, {useState, useEffect} from 'react';
import '../stylesheets/JoinGame.css';
import GameLabel from './GameLabel';
import Button from './Button';
import {useNavigate } from 'react-router-dom';
import {socket} from './Client';


function JoinGame() {
  const navigate = useNavigate();
  const [gameCode, setGameCode] = useState();
  const [games, setGames] = useState([{ code: 'A012', speedway: 'Pista 1', theme: 'Tema 1', players: '5/8' }]);


  const changeGameCode=e=> {
    setGameCode(e.target.value);
  }

  socket.on("availableGames",handleAvailableGames); 
  function handleAvailableGames(listGames){
    setGames(games.concat(listGames));
    console.log(games);
  }
  
  return (
    <div className='join-game-container'>
      {/* Game header */}
      <GameLabel
        options={['Codigo', 'Pista', 'Tematica', 'Jugadores']} />
      {useEffect(function(){games.map(game =>
        <div className='radio-list' key={game.code}>
          <label >
            <input
              type='radio'
              value={game.code}
              checked={gameCode === game.code ? true : false}
              onChange={changeGameCode}
            />
            <GameLabel options={[game.code, game.speedway, game.theme, game.players]} />
          </label>
        </div>)},[games])}

      <div className='back-create-btn-container'>
        <Button
          text='Atras'
          btnClass='btn-back'
          manageClick={() => {
            navigate('/');
          }} />
        <Button
          text='Unirse'
          btnClass='btn-create'
          manageClick={() => {
            navigate('/game');
          }} />
      </div>
    </div>
  );
}

export default JoinGame;