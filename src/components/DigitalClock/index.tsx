import React from 'react';
import { Time } from '../../utils/Time';

type props = {
  time: Time;
};

export default function DigitalClock({
  time: { hour, min, second, millisec },
}: props) {
  return (
    <div>
      <span>{hour.toString().padStart(2, '0')}</span>:
      <span>{min.toString().padStart(2, '0')}</span>:
      <span>{second.toString().padStart(2, '0')}</span>.
      <span>{millisec.toString().padStart(3, '0')}</span>
    </div>
  );
}
