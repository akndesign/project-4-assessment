import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header'
import Circles from './Circles/Circles'
import CircleSelector from './CircleSelector/CircleSelector'

const App = () => {

  const [numberID, setnumberID] = useState();

  const handleOnClick = (event) => {
    setnumberID(event.target.value)
  }

  return (
    <div className="App">
      <Header />
      <main>
        <CircleSelector numberID={numberID} handleOnClick={handleOnClick} />
        <Circles numberID={numberID} />
      </main>
    </div>
  );
}

export default App;