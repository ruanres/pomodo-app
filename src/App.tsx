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
      </div>
    </div>
  );
}

export default App;
