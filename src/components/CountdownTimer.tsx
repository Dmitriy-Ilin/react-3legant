import React from 'react';
import { useCountdown } from 'src/hooks/useCountdown';
import ExpiredNotice from 'src/components/ExpiredNotice';
import ShowCounter from 'src/components/ShowCounter';

type CountdownTimer = {
  targetDate: number;
}

const CountdownTimer: React.FC<CountdownTimer> = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
