import React, { useEffect, useReducer, useState } from 'react';
import { PLAYER_1, PLAYER_2, GRID_SIZE } from '../config/const';
import Speedway from './Speedway';

function updateGame(players, key) {
  //Just a prove, data must be loaded from backend
  if (key.key === 39) {
    return [ { color: 'blue', x: players[0].x + 1, y:players[0].y }, players[1]]
  }
  if (key.key === 37) {
    return [ { color: 'blue', x: players[0].x - 1, y:players[0].y }, players[1]]
  }
  if (key.key === 38) {
    return [ { color: 'blue', x: players[0].x, y:players[0].y - 1 }, players[1]]
  }
  if (key.key === 40) {
    return [ { color: 'blue', x: players[0].x, y:players[0].y + 1 }, players[1]]
  }
  return players;
}

function GameWindow() {
  const [players, setPlayer] = useReducer(updateGame, [PLAYER_1, PLAYER_2]);

  useEffect(function()  {
    function handleKeyPress(event) {
      setPlayer({ key: event.keyCode});
    }
    document.addEventListener('keyup', handleKeyPress);

    return function cleanUp() {
      document.removeEventListener('keyup', handleKeyPress);
    }

  }, []);

  return (
    <Speedway players={players}
      grid_size={30} />
  );
}
export default GameWindow;