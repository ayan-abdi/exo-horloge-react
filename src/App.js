import './App.css';
import Horloge from './Components/horloge/horloge';

function App() {
  const timer = new Date().toLocaleTimeString();
  // const timer2 = timer.getTime()
  return (
    <div className="App">
    <h1>My Horloge ♥ </h1>
    <span>time={timer}</span>
    {/* <p>Il est {new Date().toLocaleTimeString()}.</p> */}
    <Horloge/>
    </div>
  );
}

export default App;
