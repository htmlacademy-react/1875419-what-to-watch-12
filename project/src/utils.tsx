import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { TimeLeftFormat, SECONDS_PER_HOUR, DATE_FORMAT } from './const';
dayjs.extend(duration);


export const getTimeLeft = (timeLeft:number)=>{
  const minutesLeft = dayjs.duration(timeLeft, 'seconds');
  const pattern = timeLeft >= SECONDS_PER_HOUR ? TimeLeftFormat.Long : TimeLeftFormat.Short;
  return minutesLeft.format(pattern);
};

export const formatReviewDate = (date: string) => dayjs(date).format(DATE_FORMAT);
