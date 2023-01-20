import React, { useEffect, useState } from 'react';
import Button from '../Button';
import './timer.css';
import usePomodoro, { PomodoroProps } from '../../hooks/usePomodoro';
import secondsToTime from '../../utils/secondsToTime';

type UserState = 'working' | 'resting';

const Timer = (props: PomodoroProps) => {
  const [userState, setUserState] = useState<UserState>('resting');

  const {
    working,
    timer,
    completedCycles,
    timeCounting,
    pomodoros,
    onResting,
    onWorking,
    toggleTimeCounting,
  } = usePomodoro(props);

  useEffect(() => {
    document.body.setAttribute('class', working ? 'working' : '');
    setUserState(working ? 'working' : 'resting');
  }, [working]);

  return (
    <div className="timer">
      <h2 className="user-state">You are: {userState}</h2>
      <div className="time">{secondsToTime(timer)}</div>
      <div className="buttons">
        <Button label="work" onClick={onWorking} />
        <Button label="rest" onClick={() => onResting(false)} />
        <Button
          label={timeCounting ? 'pause' : 'resume'}
          onClick={toggleTimeCounting}
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
