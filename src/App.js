import './App.css'
import GameWindow from './componets/GameWindow';
//import io from 'socket.io-client'

//const socket = io.connect("http://localhost:3001");


function App() {

  return (
    <div className="App">
      <GameWindow/>
    </div>
  );
}

export default App;
