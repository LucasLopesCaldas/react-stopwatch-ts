import React, { useContext, useEffect, useState } from 'react';
import { StopwatchContext } from '../../contexts/StopwatchContext';
import { Time } from '../../utils/Time';
import Clock from '../Clock';
import DigitalClock from '../DigitalClock';
import TimeSet from '../TimeSet';
import * as S from './style';

const UPDATE_INTERVAL = 1;
const MIN_TIME = 1;

let milli = 0;
let initialMilli = 0;
const time = new Time();

export default function Stopwatch() {
  const [millisec, setMillisec] = useState(0);
  const [timerId, setTimerId] = useState(0);
  const { maxMillisec, running, setRunning } = useContext(StopwatchContext);

  useEffect(() => {
    if (milli <= 0) {
      setRunning(false);
      setMillisec(maxMillisec);
    }
  }, [maxMillisec]);

  function start() {
    if (maxMillisec < MIN_TIME) return;
    setRunning(true);
    initialMilli = Date.now();
    clearInterval(timerId);
    milli = maxMillisec;
    setMillisec(milli);

    const id = setInterval(() => {
      milli = maxMillisec - (Date.now() - initialMilli);

      setMillisec(milli);

      if (milli <= 0) {
        clearInterval(id);
        setMillisec(0);
      }
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
        <S.StopwatchButton
          disabled={milli === 0}
          type='button'
          onClick={() => {
            clearInterval(timerId);
            setMillisec(0);
            milli = 0;
          }}
        >
          STOP
        </S.StopwatchButton>
      </S.StopwatchButtonPanel>
    </S.StopwatchContainer>
  );
}
