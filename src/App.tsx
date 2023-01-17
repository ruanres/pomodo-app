import React from 'react';
import './App.css';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <div className="Counter-container">
        <h2>You are: Resting</h2>
        <Timer />
        <div className='details'>
          <h3>Details:</h3>
          <h4>Cycles: 0</h4>
          <h4>Total Working time: 00:00</h4>
          <h4>Time blocks: 0</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
