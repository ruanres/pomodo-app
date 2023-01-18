import React, { useEffect, useRef, useState } from 'react';
import Button from '../Button';
import './timer.css';

const formatToTen = (count: number) => {
  return count < 10 ? `0${count}` : count;
};
const getMinutes = (counter: number) => {
  const ONE_MINUTE = 60;
  const minutes = Math.floor(counter / ONE_MINUTE);
  const seconds = counter % ONE_MINUTE;
  return `${formatToTen(minutes)}:${formatToTen(seconds)}`;
};
type Status = 'start' | 'pause';

const Timer = () => {
  const [counter, setCounter] = useState(0);
  const [status, setStatus] = useState<Status>('pause');
  const intervalId = useRef(0);

  useEffect(() => {
    if (status === 'start') {
      const id = window.setInterval(() => {
        setCounter((current) => current + 1);
      }, 1000);
      intervalId.current = id;
    } else if (status === 'pause') {
      window.clearInterval(intervalId.current);
    }

    return () => window.clearInterval(intervalId.current);
  }, [status]);

  return (
    <div className="timer">
      <div className="time">{getMinutes(counter)}</div>
      <div className="buttons">
        <Button label="work" onClick={() => setStatus('start')} />
        <Button label="rest" onClick={() => setStatus('pause')} />
      </div>
    </div>
  );
};

export default Timer;
