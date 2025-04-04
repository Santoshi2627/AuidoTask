import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/firebasesetup';
import { Audio } from './components/audio';
import PlayerProvider from './context/playercontext';

function App() {
  

 
  

  return (
    <div className="App">
      <Audio/>
    </div>
  );
}

export default App;
