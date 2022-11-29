import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GameLabel from "./GameLabel";
import Button from "./Button";
import { socket } from "./Client";
function Stats() {
  const navigate = useNavigate();
  const [stats, setStats] = useState([]);
  const [statsComponent, setStatsComponent] = useState([]);

  /**
   * Recieve stats from backEnd
   */
  socket.on("stats", (stats) => {
    setStats(stats);
  })
  function getPlayers() {
    return "players";
  }

  function renderComponent() {
    return (
      stats.map(record =>
        <div className="radio-list" key={record.code}>
          <label>
            <GameLabel options={[record.code, record.speedway, <div>{record.players.map(player => <p key={player.time}>{player.player} {player.time}</p>)}</div>]} />
          </label>
        </div>
      )
    );
  }

  useEffect(() => {
    setStatsComponent(renderComponent);
  }, [stats]);

  return (
    <div className="join-game-container">
      <h1 className="game-title">Stats</h1>

      {/* Ranking header */}
      < GameLabel
        options={['Codigo', 'Pista', 'Jugador-Tiempo']}
      />

      {statsComponent}

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

export default Stats;