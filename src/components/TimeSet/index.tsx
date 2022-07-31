import React, { useContext, useEffect, useState } from 'react';
import { StopwatchContext } from '../../contexts/StopwatchContext';
import { Time, toMilli } from '../../utils/Time';

const input = (func: (p: number) => void, max?: number, min?: number) => (
  <input
    type='number'
    max={max}
    min={min || 0}
    onChange={({ target }) => {
      func(parseInt(target.value) || 0);
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
      {input(setHour, 23)}
      {input(setMin, 59)}
      {input(setSecond, 59)}
      {input(setMillisec, 999)}
    </div>
  );
}
