import React, { useContext, useEffect, useState } from 'react';
import { StopwatchContext } from '../../contexts/StopwatchContext';
import { Time, toMilli } from '../../utils/Time';
import * as S from './style';

const input = (
  func: (p: number) => void,
  max?: number,
  min?: number,
  defaultV?: string,
  pad?: number
) => (
  <S.DigitalClockInput
    type='number'
    max={max}
    defaultValue={defaultV}
    min={min || 0}
    onChange={({ target }) => {
      func(parseInt(target.value) || 0);
      target.value = String(parseInt(target.value));
      target.value = target.value.padStart(pad || 0, '0');
    }}
  />
);

export default function TimeSet() {
  const { setMaxMillisec } = useContext(StopwatchContext);
  const [hour, setHour] = useState(0);
  const [second, setSecond] = useState(0);
  const [min, setMin] = useState(0);
  const [millisec, setMillisec] = useState(0);

  useEffect(() => {
    setMaxMillisec(toMilli({ hour, second, min, millisec }));
  });

  return (
    <div>
      {input(setHour, 23, 0, '00', 2)}
      {input(setMin, 59, 0, '00', 2)}
      {input(setSecond, 59, 0, '00', 2)}
      {input(setMillisec, 999, 0, '000', 3)}
    </div>
  );
}
