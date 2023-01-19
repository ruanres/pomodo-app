import React, { useState } from 'react';
import Button from '../Button';
import './timer.css';
import useInterval, { Delay } from '../../hooks/useInterval';
import secondsToTime from '../../utils/secondsToTime';

type Timer = {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
};
const Timer = (props: Timer) => {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState<Delay>(null);

  useInterval(() => {
    setCounter((current) => current + 1);
  }, delay);

  return (
    <div className="timer">
      <div className="time">{secondsToTime(counter)}</div>
      <div className="buttons">
        <Button label="work" onClick={() => setDelay(1000)} />
        <Button label="pause" onClick={() => setDelay(null)} />
      </div>
    </div>
  );
};

export default Timer;
