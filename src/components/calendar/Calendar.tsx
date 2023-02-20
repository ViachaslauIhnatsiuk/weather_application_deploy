import { FC, useEffect } from 'react';
import { Divider, Stack } from '@mui/material';
import { CalendarHeader } from './CalendarHeader';
import { CalendarEvents } from './CalendarEvents';
import { selectCalendar, useAppSelector } from '../../store/selectors';
import { useAppDispatch } from '../../store/store';
import { getCalendar } from '../../store/actions/calendarActions';
import { CalendarDatePicker } from './CalendarDatePicker';

const Calendar: FC = () => {
  const { token } = useAppSelector(selectCalendar);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCalendar());
  }, []);

  return (
    <Stack sx={{ width: '100%', alignItems: 'center', gap: 2 }}>
      <CalendarHeader />
      {token && <CalendarDatePicker />}
      <Divider sx={{ width: '100%' }} />
      <CalendarEvents />
    </Stack>
  );
};

export { Calendar };
