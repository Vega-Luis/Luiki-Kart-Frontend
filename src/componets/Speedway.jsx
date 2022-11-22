import React, { useEffect, useRef } from 'react';
import { GRID_SIZE, DIMENSIONS, PLAYER_SIZE } from '../config/const';

import { track } from '../TestSpeedway';

function Speedway( {players, grid_size}) {
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
        context.fillRect(y * grid_size, x * grid_size, grid_size, grid_size);
      }
    }

  }, [players]);

  useEffect(function () {
    const context = canvasRef.current.getContext('2d');
    players.forEach(player => {
      context.fillStyle = player.color;
      context.fillRect(player.x * grid_size,  player.y * grid_size, PLAYER_SIZE, PLAYER_SIZE);
    })

  },[players]);


  return (
    <canvas ref={canvasRef} width={grid_size * DIMENSIONS}
      height={grid_size * DIMENSIONS} className='speedway' />
  );
}

export default Speedway;