import React from 'react';

function Button({ btnClass, text, manageClick }) {
  return (
    <button className={btnClass}
      onClick={manageClick}>
      {text}
    </button>
  );
}

export default Button;