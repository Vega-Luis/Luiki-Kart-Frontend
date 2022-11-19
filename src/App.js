import './stylesheets/App.css'
import GameWindow from './componets/GameWindow';
import Login from './componets/Login'
import io from 'socket.io-client'

const socket = io.connect("localhost:3001");

function App() {

  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
