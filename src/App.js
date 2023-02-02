import max from './Max.png';
import './App.css';
import CountDown from './components/CountDown';
import Marbles from './components/Marbles';
import { useState } from 'react';

function App() {
  const [days, setDays] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={max} className="App-logo" alt="max" />
        <CountDown setDays={setDays}/>
        <Marbles days={days}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
