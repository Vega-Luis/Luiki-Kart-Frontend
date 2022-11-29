import React, { useState, useEffect} from 'react';
import Speedway from './Speedway';
import {track1,track2,track3 } from '../TestSpeedway';
import {socket} from './Client'

function createPlayer(data){
  let player = {
    color:data.color,
    x:data.x,
    y:data.y
  }
  return player;
}

function GameWindow() {
  //let data = {x:19,y:12, color:localStorage.getItem('skinColor')}//const color is the skin by user 
  
  const [players, setPlayers] = useState([]);
  //
  const [track, setTrack] = useState([]);

  socket.on("listPlayer", handlelistPlayer);
  function handlelistPlayer(state){
      let data = state[0]; 
      if (data[0].speedway === "Pista 1"){
        setTrack(track1);
      }
      else if (data[0].speedway  === "Pista 2"){
        setTrack(track2);
      }
      else{
        setTrack(track3); 
      }
      getPlayer(state);
  }
  function getPlayer(state){
    let list = [];
    for (let index = 1; index < state.length; index++) {
      const element = state[index];
      let player = createPlayer(element[2]);
      list.push(player);
    }
    setPlayers(list);
  }

  useEffect(function()  {
    function handleKeyPress(e) {
      console.log( e.keyCode);
      socket.emit('keydown', e.keyCode);
    }
    document.addEventListener('keydown', handleKeyPress);
    return function cleanUp() {
      document.removeEventListener('keydown', handleKeyPress);
    }
  }, []);

  return (
    <Speedway players={players}
    grid_size={30}
    track = {track} />
  );
}
export default GameWindow;