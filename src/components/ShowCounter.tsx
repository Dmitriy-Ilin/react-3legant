import DateTimeDisplay from 'src/components/DateTimeDisplay';

type ShowCounter = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ShowCounter: React.FC<ShowCounter> = ({ days, hours, minutes, seconds }) => {
  return (
    <>
      <DateTimeDisplay value={days} type={'Days'}  />
      <DateTimeDisplay value={hours} type={'Hours'} />
      <DateTimeDisplay value={minutes} type={'Mins'}  />
      <DateTimeDisplay value={seconds} type={'Seconds'} />
    </>
  );
};


export default ShowCounter;