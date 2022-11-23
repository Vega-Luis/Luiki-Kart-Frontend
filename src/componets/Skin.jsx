import React, { useEffect, useState } from "react";
import { SliderPicker } from 'react-color';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

import '../stylesheets/SkinPage.css';

// generates a default random color
const randomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function Skin() {
  const navigate = useNavigate();
  const [color, setColor] = useState(randomColor());

  // save skin color in local store
  useEffect(() => {
    localStorage.setItem('skinColor', color);
  }, [color]);

  return (
    <div className="main-container">
      <h1 className="game-title">Color de skin</h1>
      <div className='color-container' style={{ backgroundColor: color }}>
      </div>
      <div className="slider-container">
        <SliderPicker
          color={color}
          onChangeComplete={(color) => { setColor(color.hex) }} />
      </div>
      <Button
        text='Aplicar'
        btnClass='login-button'
        manageClick={() => {
          randomColor();
          navigate('/');
        }} />
    </div>
  );
}

export default Skin;