import { FC, useEffect } from 'react';
import { Divider, Stack } from '@mui/material';
import { CalendarHeader } from './CalendarHeader';
import { CalendarButton } from './CalendarButton';
import { CalendarEvents } from './CalendarEvents';
import { useAppDispatch } from '../../store/store';
import { getCalendar } from '../../store/actions/calendarActions';

const Calendar: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCalendar());
  }, []);

  return (
    <Stack sx={{ width: '100%', alignItems: 'center', gap: 2 }}>
      <CalendarHeader />
      <CalendarButton />
      <Divider sx={{ width: '100%' }} />
      <CalendarEvents />
    </Stack>
  );
};

export { Calendar };
