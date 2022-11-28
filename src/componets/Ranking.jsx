import React from "react";
import { useNavigate } from "react-router-dom";
import GameLabel from "./GameLabel";
import Button from "./Button";
import { ranking } from "../config/const";
function Ranking() {
  const navigate = useNavigate();

  return (
    <div className="join-game-container">
      <h1 className="game-title">Ranking</h1>

      {/* Ranking header */}
      < GameLabel
        options={['Jugador', 'Tiempo', 'Pista', 'Vueltas', 'Codigo']}
      />
      {
        ranking.map(record =>
          <div className="radio-list" key={record.code}>
            <label>
              <GameLabel options={[record.player, record.time, record.speedway, record.laps, record.code]} />
            </label>
          </div>
        )
      }


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