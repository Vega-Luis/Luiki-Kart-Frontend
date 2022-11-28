import './stylesheets/App.css'
import GameWindow from './componets/GameWindow';
import Login from './componets/Login'
import CreateGame from './componets/CreateGame';
import JoinGame from './componets/JoinGame';
import Skin from './componets/Skin';
import Ranking from './componets/Ranking';
import Stats from './componets/Stats';
import {Routes,Route,} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<Login />} />
        <Route path='/create-game' element={<CreateGame />} />
        <Route path='/game' element={<GameWindow />} />
        <Route path='/join-game' element={<JoinGame />} />
        <Route path='/ranking' element={<Ranking />} />
        <Route path='/skin' element={<Skin />} />
        <Route path='/stats' element={<Stats />} />
      </Routes>
    </div>
  );
}

export default App;
