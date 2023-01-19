import React, { useEffect, useState } from 'react';
import Button from '../Button';
import './timer.css';
import useInterval from '../../hooks/useInterval';
import secondsToTime from '../../utils/secondsToTime';

type Timer = {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
};

type UserState = 'working' | 'resting';

const Timer = (props: Timer) => {
  const [counter, setCounter] = useState(props.pomodoroTime);
  const [working, setWorking] = useState(false);
  const [timeCounting, setTimeCounting] = useState(false);
  const [userState, setUserState] = useState<UserState>('resting');

  useEffect(() => {
    document.body.setAttribute('class', working ? 'working' : '');
    setUserState(working ? 'working' : 'resting');
  }, [working]);

  useInterval(
    () => {
      setCounter((current) => current - 1);
    },
    timeCounting ? 1000 : null,
  );

  const startWorking = () => {
    setWorking(true);
    setCounter(props.pomodoroTime);
    setTimeCounting(true);
  };

  const startResting = (long: boolean) => {
    setWorking(false);
    setCounter(long ? props.longRestTime : props.shortRestTime);
    setTimeCounting(true);
  };

  return (
    <div className="timer">
      <h2 className="user-state">You are: {userState}</h2>
      <div className="time">{secondsToTime(counter)}</div>
      <div className="buttons">
        <Button label="work" onClick={startWorking} />
        <Button label="rest" onClick={() => startResting(false)} />
        <Button
          label={timeCounting ? 'pause' : 'resume'}
          onClick={() => setTimeCounting(!timeCounting)}
        />
      </div>
    </div>
  );
};

export default Timer;
