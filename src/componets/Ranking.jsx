import React,{ useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GameLabel from "./GameLabel";
import Button from "./Button";
import {socket} from './Client';

function Ranking() {
  const navigate = useNavigate();
  const [ranking, setRanking] = useState([]);
  const [rankingComponent, setRankingComponent] = useState([]);

  /**
   * Recieve ranking from backend
   */
  socket.on("ranking", (ranking) => {
    setRanking(ranking)
  });

  /**
   * Render ranking list component 
   */
  function renderComponent() {
    return (
      ranking.map(record =>
      <div className="radio-list" key={record.code}>
        <label>
          <GameLabel options={[record.player, record.time, record.speedway, record.laps, record.code]} />
        </label>
      </div>
    )
    );
  }
  
  /**
   * Update ranking list component
   */
  useEffect( () => {
    setRankingComponent(renderComponent);
  }, [ranking]);

  return (
    <div className="join-game-container">
      <h1 className="game-title">Ranking</h1>

      {/* Ranking header */}
      < GameLabel
        options={['Jugador', 'Tiempo', 'Pista', 'Vueltas', 'Codigo']}
      />

      { rankingComponent }

      <div className='back-create-btn-container'>
        <Button
          text='Atras'
          btnClass='btn-back'
          manageClick={() => {
            navigate('/');
          }} />

      </div>
    </div>
  );
}

export default Ranking;