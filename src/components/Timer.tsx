import CountdownTimer from './CountdownTimer';

const Timer = () => {
  const TWO_DAYS_IN_MS = 2 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + TWO_DAYS_IN_MS;

  return (
    <>
      <div className='timer'>
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      </div>
    </>
  );
};

export default Timer;
