import Instant from '../types/Instant';

export class Time {
  hour = 0;
  min = 0;
  second = 0;
  millisec = 0;
  date = new Date();

  set(millisec: number) {
    this.date.setTime(millisec);
    this.hour = this.date.getUTCHours();
    this.min = this.date.getUTCMinutes();
    this.second = this.date.getUTCSeconds();
    this.millisec = this.date.getUTCMilliseconds();
  }
}

export function toMilli(instant: Instant) {
  let res = instant.hour * 60 * 60 * 1000;
  res = res + instant.min * 60 * 1000
  res = res + instant.second * 1000
  return res + instant.millisec;
}