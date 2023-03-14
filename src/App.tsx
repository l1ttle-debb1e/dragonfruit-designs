import { useState } from 'react';
import dragonFruitLogo from './assets/dragonFruits.svg';
import ciara from './assets/ciaraCarwash.svg';
import './App.css';

function App() {
  const [sharkCount, setSharkCount] = useState(0);
  const [birdCount, setBirdCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={ciara} className="logo" alt="profile" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img
            src={dragonFruitLogo}
            className="logo react"
            alt="Dragonfruit logo"
          />
        </a>
      </div>
      <h1>Welcome to Dragonfruit Designs</h1>
      <div className="card">
        <button onClick={() => setSharkCount((sharkCount) => sharkCount + 1)}>
          Click if you like baby hammerhead sharks: {sharkCount}
        </button>
      </div>
      <div className="card">
        <button onClick={() => setBirdCount((birdCount) => birdCount + 1)}>
          Click if you like potoo birds: {birdCount}
        </button>
      </div>
    </div>
  );
}

export default App;
