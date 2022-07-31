import React from 'react';
import { Time } from '../../utils/Time';
import * as S from './style'

type props = {
  time: Time;
};

export default function DigitalClock({
  time: { hour, min, second, millisec },
}: props) {
  return (
    <S.DigitalClockContainer>
      <S.DigitalClockText>{hour.toString().padStart(2, '0')}</S.DigitalClockText>:
      <S.DigitalClockText>{min.toString().padStart(2, '0')}</S.DigitalClockText>:
      <S.DigitalClockText>{second.toString().padStart(2, '0')}</S.DigitalClockText>.
      <S.DigitalClockText>{millisec.toString().padStart(3, '0')}</S.DigitalClockText>
    </S.DigitalClockContainer>
  );
}
