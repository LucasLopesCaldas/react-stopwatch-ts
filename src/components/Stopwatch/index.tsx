import React, { useContext, useEffect, useState } from 'react';
import { StopwatchContext } from '../../contexts/StopwatchContext';
import { Time } from '../../utils/Time';
import Clock from '../Clock';
import DigitalClock from '../DigitalClock';
import TimeSet from '../TimeSet';
import * as S from './style';

const TIME_INTERVAL = 10;
const UPDATE_INTERVAL = 10;

let milli = 0;
const time = new Time();

export default function Stopwatch() {
  const [millisec, setMillisec] = useState(0);
  const [timerId, setTimerId] = useState(0);
  const { maxMillisec, running, setRunning } = useContext(StopwatchContext);

  useEffect(() => {
    setMillisec(maxMillisec);
  }, [maxMillisec]);

  function start() {
    setRunning(true);
    clearInterval(timerId);
    milli = maxMillisec;
    setMillisec(milli);

    const id = setInterval(() => {
      milli -= 10;
      if (milli <= 0) {
        milli = 0;
        setRunning(false);
        clearInterval(id);
      }
    }, TIME_INTERVAL);

    const secId = setInterval(() => {
      setMillisec(milli);

      if (milli <= 0) clearInterval(secId);
    }, UPDATE_INTERVAL);

    setTimerId(id);
  }

  time.set(millisec);

  return (
    <S.StopwatchContainer>
      <TimeSet />
      <DigitalClock time={time} />
      <Clock time={time} />
      <S.StopwatchButtonPanel>
        <S.StopwatchButton type='button' onClick={start}>
          {running ? 'RESTART' : 'START'}
        </S.StopwatchButton>
        <S.StopwatchButton type='button' onClick={() => (milli = 0)}>
          STOP
        </S.StopwatchButton>
      </S.StopwatchButtonPanel>
    </S.StopwatchContainer>
  );
}
