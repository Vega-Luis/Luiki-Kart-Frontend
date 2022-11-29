import React, {useState, useEffect} from 'react';
import '../stylesheets/JoinGame.css';
import GameLabel from './GameLabel';
import Button from './Button';
import {useNavigate } from 'react-router-dom';
import {socket} from './Client';


function JoinGame() {
  const navigate = useNavigate();
  const [gameCode, setGameCode] = useState();
  const [games, setGames] = useState([]);

  const [gamesComponent, setGamesComponent] = useState();
  let active = false; 

  const changeGameCode=e=> {
    setGameCode(e.target.value);
  }

  socket.on("availableGames",handleAvailableGames); 
  function handleAvailableGames(listGames){
    console.log(listGames);
    setGames(listGames);
  }

  function joinGames(){
    socket.emit("joinGames",gameCode);
    navigate('/game');
    
  }
  useEffect(() => {
    setGamesComponent(painGamesComponent);
  },[games]);

  function painGamesComponent() {
    return (
      games.map(game =>
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
        </div>)
    );
  }

  return (
    <div className='join-game-container'>
      {/* Game header */}
      <GameLabel
        options={['Codigo', 'Pista', 'Tematica', 'Jugadores']} />
        {gamesComponent}
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
          manageClick={joinGames} />
      </div>
    </div>
  );
}

export default JoinGame;