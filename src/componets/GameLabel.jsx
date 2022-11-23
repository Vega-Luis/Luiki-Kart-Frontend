import React from "react";
import '../stylesheets/GameLabel.css';
function GameLabel({ options }) {
  
  return (
    <div className="game-label-wraper">
      {options.map(option => <p key={option}>{option}</p>)}
    </div>
   );
}

export default GameLabel;