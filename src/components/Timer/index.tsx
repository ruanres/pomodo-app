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
  const [pomodoros, setPomodoros] = useState(0);
  const [completedCycles, setCompletedCycles] = useState(0);

  useEffect(() => {
    document.body.setAttribute('class', working ? 'working' : '');
    setUserState(working ? 'working' : 'resting');

    const timeIsOver = counter <= 0;
    if (timeIsOver) {
      if (working) {
        const increasedPomodoro = pomodoros + 1;
        setPomodoros(increasedPomodoro);
        const isCycleCompleted = increasedPomodoro % props.cycles === 0;
        if (isCycleCompleted) {
          startResting(true);
          setCompletedCycles((quantity) => quantity + 1);
        } else {
          startResting(false);
        }
      } else {
        startWorking();
      }
    }
  }, [working, counter, pomodoros, props.cycles]);

  useInterval(
    () => setCounter((current) => current - 1),
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
      <div className="details">
        <h3>Details:</h3>
        <h4>Completed Cycles: {completedCycles}</h4>
        <h4>
          Total Working time: {secondsToTime(props.pomodoroTime * pomodoros)}
        </h4>
        <h4>Pomodoros: {pomodoros}</h4>
      </div>
    </div>
  );
};

export default Timer;
