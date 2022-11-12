import React from 'react';
import Button from './Button'
import Login from './Login';
import { Route } from 'react-router-dom';

function WelcomeScreen() {
  const onClickPlay = () => {
    <Route componet={Login}/> 
  }
  return (
    <div>
      <h1 className='gameName'>Luiki Kart</h1>
      <div>
        <Button
          text='Play'
          manageClick={onClickPlay}/>
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