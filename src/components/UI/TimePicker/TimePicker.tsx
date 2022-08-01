import { Dayjs } from 'dayjs';
import * as React from 'react';
import { PickerTimeProps } from 'antd/es/date-picker/generatePicker';
import DatePicker from '../DatePicker/DatePicker';

export interface TimePickerProps
  extends Omit<PickerTimeProps<Dayjs>, 'picker'> {}

const TimePicker = React.forwardRef<any, TimePickerProps>((props, ref) => {
  return <DatePicker {...props} picker='time' mode={undefined} ref={ref} />;
});

TimePicker.displayName = 'TimePicker';

export default TimePicker;
