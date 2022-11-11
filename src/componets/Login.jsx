import React from 'react';
import Button from './Button'
function Login() {
  return (
    <div>
      <div>
        <input type='text'></input>
      </div>
      <div>
      <Button
        text='Crear Partida'/>
      <Button
        text='Unirse a Partida'/>
      </div>
    </div>      
  );
}

export default Login;