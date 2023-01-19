import React from 'react';
import './App.css';
import Timer from './components/Timer';

const MINUTES_25 = 1500;
const MINUTES_5 = 300;
const MINUTES_15 = 900;
const CYCLES = 4;

function App() {
  return (
    <div className="Pomodoro">
      <div className="counter-container">
        <Timer
          pomodoroTime={MINUTES_25}
          shortRestTime={MINUTES_5}
          longRestTime={MINUTES_15}
          cycles={CYCLES}
        />
        <div className="details">
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
