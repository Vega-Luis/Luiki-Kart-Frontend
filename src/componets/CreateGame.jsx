import Button from './Button';
import Speedway from './Speedway';
import Select from 'react-select';
import '../stylesheets/CreateGame.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MAX_LAPS, MAX_PLAYERS, MIN_LAPS, MIN_PLAYERS, speedways, gameTypes } from '../config/const';
import {track1,track2,track3 } from '../TestSpeedway';
import {socket} from './Client'
 

function CreateGame() {
  
  const [track, setTrack] = useState(track1);
  //allows to navigate between pages
  const navigate = useNavigate();

  // select speedway
  const [speedway, setSpeedway] = useState(speedways[0]);

  // select game type
  const [gameType, setGameType] = useState(gameTypes[0]);

  //select number of laps
  const [lapsNumber, setLapsNumber] = useState(MAX_LAPS);

  // select number of players
  const [playersNumber, setPlayersNumber] = useState(MAX_PLAYERS);

  const handleSpeedways = (event) => {
    setSpeedway(event.value);
    if (event.value === "Pista 1"){
      setTrack(track1); 
    }
    else if (event.value === "Pista 2"){
      setTrack(track2); 
    }
    else{
      setTrack(track3); 
    }
  }

  const handleGameType = (event) => {
    setGameType(event.value);
  }

  const handleLapsNumber = (event) => {
    setLapsNumber(event.value);
  }

  const handlePlayersNumber = (event) => {
    setPlayersNumber(event.value);
  }

  // sets the options for laps and players number
  function setNumericOptions(min, max) {
    let options = []
    for (let i = min; i < max; i++) {
      options.push({ label: i, value: i });
    }
    return options;
  }

  function newGame(){
    socket.emit('newGame',{speedway, gameType, lapsNumber, playersNumber});
    navigate('/game');
  }

  function setDefaultOption(options) {
    return { label: options[0], value: options[1] }
  }
  return (
    <div className='create-game-container'>
      <div className='cont'>
        <div className='speedway-preview'>
          <Speedway players={[]}
            grid_size={20} 
            track = {track}/>
        </div>
        <div className='options-wrapper'>
          <div className='options-container'>
            <div className='speedway-selector'>
              <label>Pista:</label>
              <Select
                defaultValue={setDefaultOption(speedways)}
                options={speedways.map(speedway => ({ label: speedway, value: speedway }))}
                onChange={handleSpeedways} />
            </div>
            <div className='speedway-selector'>
              <label>Tipo de juego:</label>
              <Select
                defaultValue={setDefaultOption(gameTypes)}
                options={gameTypes.map(game => ({ label: game, value: game }))}
                onChange={handleGameType} />
            </div>
            <div className='speedway-selector'>
              <label>Cantidad de vueltas:</label>
              <Select
                defaultValue={{ label: MAX_LAPS, value: MAX_LAPS }}
                options={setNumericOptions(MIN_LAPS, MAX_LAPS)}
                onChange={handleLapsNumber} />

            </div>
            <div className='speedway-selector'>
              <label>Cantidad de jugadores:</label>
              <Select
                defaultValue={{ label: MAX_PLAYERS, value: MAX_PLAYERS }}
                options={setNumericOptions(MIN_PLAYERS, MAX_PLAYERS)}
                onChange={handlePlayersNumber} />
            </div>
          </div>
          <div className='back-create-btn-container'>
            <Button
              text='Atras'
              btnClass='btn-back'
              manageClick={() => {
                navigate('/');
              }} />
            <Button
              text='Crear'
              btnClass='btn-create'
              manageClick={newGame} />
          </div>
        </div>
      </div>

    </div>
  );
}

export default CreateGame;