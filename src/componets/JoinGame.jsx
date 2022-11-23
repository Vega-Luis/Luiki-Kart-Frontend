import React, {useState} from 'react';
import '../stylesheets/JoinGame.css';
import GameLabel from './GameLabel';
import { games } from '../config/const';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

function JoinGame() {
  const navigate = useNavigate();
  const [gameCode, setGameCode] = useState();
  const changeGameCode=e=> {
    setGameCode(e.target.value);
  }
  return (
    <div className='join-game-container'>
      {/* Game header */}
      <GameLabel
        options={['Codigo', 'Pista', 'Tematica', 'Jugadores']} />

      {games.map(game =>
        <div className='radio-list' key={game.code}>
          <label >
            <input
              type='radio'
              value={game.code}
              checked={gameCode == game.code ? true : false}
              onChange={changeGameCode}
            />
            <GameLabel options={[game.code, game.speedway, game.theme, game.players]} />
          </label>
        </div>)}

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