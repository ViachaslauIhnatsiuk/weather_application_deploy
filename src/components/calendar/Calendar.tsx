import { FC, useEffect } from 'react';
import { Box, Divider, Stack } from '@mui/material';
import { CalendarHeader } from './CalendarHeader';
import { CalendarButton } from './CalendarButton';
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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <CalendarButton />
        {token && <CalendarDatePicker />}
      </Box>
      <Divider sx={{ width: '100%' }} />
      <CalendarEvents />
    </Stack>
  );
};

export { Calendar };
