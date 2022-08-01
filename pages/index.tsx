import dayjs from 'dayjs';
import type { NextPage } from 'next';
import DatePicker from 'src/components/UI/DatePicker/DatePicker';
import TimePicker from 'src/components/UI/TimePicker/TimePicker';

const Home: NextPage = () => {
  return (
    <div>
      <DatePicker defaultValue={dayjs()} />
      <TimePicker defaultValue={dayjs()} />
    </div>
  );
};

export default Home;
