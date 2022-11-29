import Button from './Button'
import '../stylesheets/Login.css'
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {socket} from './Client';

function Login() {
  const navigate = useNavigate();

  const [userNickname, setUserNickname] = useState('DefaultNick');

  /* Saving user nickname */
  useEffect(() => {
    if (!userNickname) {
      setUserNickname('Default');
    }
    localStorage.setItem('userNickname', userNickname);
    console.log(userNickname)
  }, [userNickname]);

  
  /* manage nickname change */
  const handleNickname = (event) => {
    setUserNickname(event.target.value);
  };

  /* manage on create game click */
  const createGameOnClick = () => {
    socket.emit("nickname",userNickname); 
    navigate('create-game');
  }

  const joinGame = () =>{
    socket.emit("nickname",userNickname);
    navigate('/join-game');
  }
  return (
    <div className='login-container'>
      <div className='title-container'>
        <h1 className='game-title'>LUIKI KART</h1>
      </div>
      <div>
        <input
          type='text'
          className='nickname'
          placeholder='Nickname'
          onChange={handleNickname}
        ></input>
      </div>
      <div>
        <Button
          text='Crear Partida'
          btnClass='login-button'
          manageClick={createGameOnClick} />
        <Button
          text='Unirse a Partida'
          btnClass='login-button'
          manageClick={joinGame}/>
      </div>
      <div>
        <Button
          btnClass='btn-ranking'
          manageClick={() => {
            navigate('/ranking');
          }} />
        <Button
          btnClass='btn-skin'
          manageClick={() => {
            navigate('/skin');
          }} />
        <Button
          btnClass='btn-stats'
          manageClick={() => {
            navigate('/stats');
          }} />
      </div>
    </div>
  );
}

export default Login;