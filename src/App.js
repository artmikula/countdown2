import max from './Image.png';
import './App.css';
import CountDown from './components/CountDown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={max} className="App-logo" alt="max" />
        <CountDown />
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
