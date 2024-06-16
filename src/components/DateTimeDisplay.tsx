import React from 'react';

type DateTimerDisplay = {
  value: number;
  type: string;
};

const DateTimeDisplay: React.FC<DateTimerDisplay> = ({ value, type }) => {
  return (
    <div className='timer__el'>
      <div className='timer__value'>{value}</div>
      <div className='timer__desc'>{type}</div>
    </div>
  );
};

export default DateTimeDisplay;
