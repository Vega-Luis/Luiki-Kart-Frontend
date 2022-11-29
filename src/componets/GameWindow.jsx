import React, { useState, useEffect} from 'react';
import Speedway from './Speedway';
import {track1,track2,track3 } from '../TestSpeedway';
import {socket} from './Client'
import { useNavigate } from 'react-router-dom';

function createPlayer(data){
  let player = {
    color:data.color,
    x:data.x,
    y:data.y
  }
  return player;
}

function GameWindow() {
  //let data = {x:19,y:10, color:localStorage.getItem('skinColor')}//const color is the skin by user 
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);
  //
  const [track, setTrack] = useState([]);

  let start = false;

  socket.on("start",handleStart);
  socket.on("gameFinish",handleGameFinish);
  socket.on("listPlayer", handlelistPlayer);

  function handleStart(){
    start = true;
    console.log("Todos los jugadores estan");
  }

  function handleGameFinish(player){
    start = false;
    alert("Player : " +player+ "is winner ")
    navigate('/');
  }

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
      if (element[0] === socket.id){
        player.color= localStorage.getItem('skinColor');
      }
      list.push(player);
    }
    setPlayers(list);
  }

  useEffect(function()  {
    function handleKeyPress(e) {
      if (start){
        socket.emit('keydown', e.keyCode);
      }
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