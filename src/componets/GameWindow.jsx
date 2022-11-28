import React, { useState, useReducer} from 'react';
import Speedway from './Speedway';
import {PLAYER} from '../config/const';
import {track1,track2,track3 } from '../TestSpeedway';
import {socket} from './Client'

function createPlayer(data){
  let player = {
    color: '',
    x: 0,
    y: 0
  }
  player.color = data.color;
  player.x = data.x;
  player.y = data.y;
  return player;
}

function GameWindow() {
  //
  let data = {x:19,y:12, color:localStorage.getItem('skinColor')}//const color is the skin by user 
  let gameType = null;
  let playersNumber = null;
  
  //
  //const [players, setPlayers] = useReducer(updatePlayer,[]);

  //
  const [track, setTrack] = useState([]);

  socket.on("init", handleInit);

  function handleInit(data){
    if (data.speedway === "Pista 1"){
      setTrack(track1);
    }
    else if (data.speedway  === "Pista 2"){
      setTrack(track2);
    }
    else{
      setTrack(track3); 
    }
    document.addEventListener('keydown', keydown);
  }

  function keydown(e) {
    socket.emit('keydown', e.keyCode);
  }
  return (
    <Speedway players={[createPlayer(data)]}
    grid_size={30}
    track = {track} />
  );
}
export default GameWindow;