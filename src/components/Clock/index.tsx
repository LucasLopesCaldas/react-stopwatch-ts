import React from 'react';
import { Time } from '../../utils/Time';
import * as S from './style';

type props = {
  time: Time;
};

export default function DigitalClock({ time }: props) {
  const hour = ((time.hour + time.min / 60) / 12) * 360;
  const min = ((time.min + time.second / 60) / 60) * 360;
  const second = ((time.second + time.millisec / 1000) / 60) * 360;

  return (
    <S.ClockContainer>
      <S.ClockImage draggable={false} src='/src/assets/clock.svg' />
      <S.MinPointerImage draggable={false} rotation={min} src='/src/assets/clock-pointer.svg' />
      <S.HourPointerImage draggable={false} rotation={hour} src='/src/assets/clock-pointer.svg' />
      <S.SecPointerImage draggable={false}
        rotation={second}
        src='/src/assets/clock-pointer.svg'
      />
    </S.ClockContainer>
  );
}
