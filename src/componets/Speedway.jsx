import React, { useEffect, useRef } from 'react';
import { GRID_SIZE, DIMENSIONS } from '../config/const';

import {track} from '../Aux';

function Speedway() {
  const canvasRef = useRef();

  useEffect(function () {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    for (let x = 0; x < track.length; x++) {
      for (let y = 0; y < track[0].length; y++) {
        if (track[x][y] == 'x') {
          context.fillStyle = 'green';
        } else {
          context.fillStyle = 'gray';
        }
        context.fillRect(y * GRID_SIZE, x * GRID_SIZE, GRID_SIZE, GRID_SIZE);
      }
    }

  }, []);

  return (
    <canvas ref={canvasRef} width={GRID_SIZE * DIMENSIONS}
      height={GRID_SIZE * DIMENSIONS}className='speedway'/>
  );
}

export default Speedway;