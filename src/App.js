import './App.css';
import Horloge from './Components/horloge/horloge';
import CurrentDate from './Components/currentDate/currentDate';
import { useState } from 'react';

function App() {
  const [displayCurrentDate, setDisplayCurrentDate] = useState(true);
  const [displayHorloge, setDisplayHorloge] = useState(false);
 
  
 return (

    <div className="App">
    <h1>Hier mijn Horloge ♥ </h1>
    <button onClick={() => {
      setDisplayCurrentDate(!displayCurrentDate); 
      setDisplayHorloge(!displayHorloge)}
      }>click</button>
    {displayCurrentDate && 
      <CurrentDate />
    }
    {displayHorloge && 
      <Horloge/>
    }
    
   </div>
  );
}

export default App;
