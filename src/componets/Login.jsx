import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button'
import '../stylesheets/Login.css'

function Login() {
  const navigate = useNavigate();

  const [userNickname, setUserNickname] = useState('DefaultNick');

  /* Saving user nickname */
  useEffect(() => {
    if (!userNickname) {
      setUserNickname('Default');
    }
    localStorage.setItem('userNickname', userNickname);
  }, [userNickname]);

  /* manage nickname change */
  const handleNickname = (event) => {
    setUserNickname(event.target.value);
  };

  /* manage on create game click */
  const createGameOnClick = () => {
    navigate('create-game');
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
          manageClick={() => {
            navigate('/join-game');
          }} />
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