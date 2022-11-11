import React from 'react';
import Button from './Button'

function WelcomeScreen() {
  return (
    <div>
      <h1 className='gameName'>Luiki Kart</h1>
      <div>
        <Button
          text='Play'/>
      </div>
      <div>
        <Button
          text='ranking'/>
        <Button
          text='skin'/>
        <Button
          text='stats'/>
      </div>
    </div>
    );
}

export default WelcomeScreen;