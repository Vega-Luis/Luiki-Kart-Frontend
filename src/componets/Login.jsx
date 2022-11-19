import React from 'react';
import Button from './Button'
import '../stylesheets/Login.css'

function Login() {
  return (
    <div className='login-container'>
      <div className='title-container'>
        <h1 className='game-title'>LUIKI KART</h1>
      </div>
      <div>
        <input type='text' className='nickname' placeholder='Nickname'></input>
      </div>
      <div>
      <Button
        text='Crear Partida'
        btnClass='login-button'/>
      <Button
        text='Unirse a Partida'
        btnClass='login-button'/>
      </div>
      <div>
        <Button
          btnClass='btn-ranking'/>
        <Button
          btnClass='btn-skin'/>
        <Button
          btnClass='btn-stats'/>
      </div>
    </div>      
  );
}

export default Login;