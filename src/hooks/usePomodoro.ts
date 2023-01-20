import { useEffect, useState } from 'react';
import useInterval from './useInterval';

export type PomodoroProps = {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
};

const usePomodoro = ({
  pomodoroTime,
  shortRestTime,
  longRestTime,
  cycles,
}: PomodoroProps) => {
  const [timer, setTimer] = useState(pomodoroTime);
  const [working, setWorking] = useState(false);
  const [timeCounting, setTimeCounting] = useState(false);
  const [pomodoros, setPomodoros] = useState(0);
  const [completedCycles, setCompletedCycles] = useState(0);

  useEffect(() => {
    const timeIsOver = timer <= 0;
    if (timeIsOver) {
      if (working) {
        const increasedPomodoro = pomodoros + 1;
        setPomodoros(increasedPomodoro);
        const isCycleCompleted = increasedPomodoro % cycles === 0;
        if (isCycleCompleted) {
          onResting(true);
          setCompletedCycles((quantity) => quantity + 1);
        } else {
          onResting(false);
        }
      } else {
        onWorking();
      }
    }
  }, [working, timer, pomodoros, cycles]);

  useInterval(
    () => setTimer((current) => current - 1),
    timeCounting ? 1000 : null,
  );

  const onWorking = () => {
    setWorking(true);
    setTimer(pomodoroTime);
    setTimeCounting(true);
  };

  const onResting = (long: boolean) => {
    setWorking(false);
    setTimer(long ? longRestTime : shortRestTime);
    setTimeCounting(true);
  };

  const toggleTimeCounting = () => setTimeCounting(!timeCounting);

  return {
    timer,
    working,
    completedCycles,
    timeCounting,
    pomodoros,
    onWorking,
    onResting,
    toggleTimeCounting,
  };
};

export default usePomodoro;
