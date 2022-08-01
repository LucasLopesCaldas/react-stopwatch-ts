import React, { useContext, useEffect, useState } from 'react';
import { StopwatchContext } from '../../contexts/StopwatchContext';
import { Time, toMilli } from '../../utils/Time';
import * as S from './style';

import { BiReset } from 'react-icons/bi';

const input = (
  func: (p: number) => void,
  max?: number,
  min?: number,
  pad?: number,
  value?: string | number
) => (
  <S.TimeSetInput
    type='number'
    max={max}
    min={min || 0}
    value={String(value || '').padStart(pad || 0, '0')}
    onChange={({ target }) => {
      func(parseInt(target.value) || 0);
      target.value = String(parseInt(target.value));
      target.value = target.value.padStart(pad || 0, '0');
    }}
  />
);

export default function TimeSet() {
  const { setMaxMillisec } = useContext(StopwatchContext);

  const savedTime = localStorage.getItem('lastTime');
  const time = (savedTime ? JSON.parse(savedTime) : new Time()) as Time;

  const [hour, setHour] = useState(time.hour);
  const [second, setSecond] = useState(time.second);
  const [min, setMin] = useState(time.min);
  const [millisec, setMillisec] = useState(time.millisec);

  useEffect(() => {
    setMaxMillisec(toMilli({ hour, second, min, millisec }));
    localStorage.setItem(
      'lastTime',
      JSON.stringify({ hour, second, min, millisec })
    );
  });

  return (
    <div>
      {input(setHour, 23, 0, 2, hour)}
      {input(setMin, 59, 0, 2, min)}
      {input(setSecond, 59, 0, 2, second)}
      {input(setMillisec, 999, 0, 3, millisec)}
      <S.TimeSetRoundButton
        onClick={() => {
          setHour(0);
          setSecond(0);
          setMin(0);
          setMillisec(0);
        }}
      >
        <BiReset />
      </S.TimeSetRoundButton>
    </div>
  );
}
