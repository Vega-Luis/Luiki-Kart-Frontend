import React, { useEffect, useRef } from 'react';
import { GRID_SIZE, DIMENSIONS, PLAYER_SIZE } from '../config/const';

import { track } from '../TestSpeedway';

function Speedway( {players}) {
  const canvasRef = useRef();

  useEffect(function () {
    const context = canvasRef.current.getContext('2d');
    for (let x = 0; x < track.length; x++) {
      for (let y = 0; y < track[0].length; y++) {
        if (track[x][y] === 'x') {
          context.fillStyle = 'green';
        } else {
          context.fillStyle = 'gray';
        }
        context.fillRect(y * GRID_SIZE, x * GRID_SIZE, GRID_SIZE, GRID_SIZE);
      }
    }

  }, [players]);

  useEffect(function () {
    const context = canvasRef.current.getContext('2d');
    players.forEach(player => {
      context.fillStyle = player.color;
      context.fillRect(player.x * GRID_SIZE,  player.y * GRID_SIZE, PLAYER_SIZE, PLAYER_SIZE);
    })

  },[players]);


  return (
    <canvas ref={canvasRef} width={GRID_SIZE * DIMENSIONS}
      height={GRID_SIZE * DIMENSIONS} className='speedway' />
  );
}

export default Speedway;