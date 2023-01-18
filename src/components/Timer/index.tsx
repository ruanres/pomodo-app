import React, { useState } from 'react';
import Button from '../Button';
import './timer.css';
import useInterval, { Delay } from '../../hooks/useInterval';

const formatToTen = (count: number) => {
  return count.toString().padStart(2, '0');
};
const getMinutes = (counter: number) => {
  const ONE_MINUTE = 60;
  const minutes = Math.floor(counter / ONE_MINUTE);
  const seconds = counter % ONE_MINUTE;
  return `${formatToTen(minutes)}:${formatToTen(seconds)}`;
};

const Timer = () => {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState<Delay>(null);

  useInterval(() => {
    setCounter((current) => current + 1);
  }, delay);

  return (
    <div className="timer">
      <div className="time">{getMinutes(counter)}</div>
      <div className="buttons">
        <Button label="work" onClick={() => setDelay(1000)} />
        <Button label="pause" onClick={() => setDelay(null)} />
      </div>
    </div>
  );
};

export default Timer;
