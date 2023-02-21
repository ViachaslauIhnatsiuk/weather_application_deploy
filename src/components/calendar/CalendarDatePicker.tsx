import { FC, useState } from 'react';
import { Box, Button } from '@mui/material';
import { CalendarDatePickerItem } from './CalendarDatePickerItem';
import { useAppDispatch } from '../../store/store';
import { getCalendar, setDateRange } from '../../store/actions/calendarActions';
import { getISODayStart, getISODayEnd } from '../../helpers/date';

const CalendarDatePicker: FC = () => {
  const [startDate, setStartDate] = useState<string>(getISODayStart());
  const [endDate, setEndDate] = useState<string>(getISODayEnd());
  const dispatch = useAppDispatch();

  const handleStartDate = (value: string): void => {
    const start = getISODayStart(value);
    setStartDate(start);
  };

  const handleEndDate = (value: string): void => {
    const end = getISODayEnd(value);
    setEndDate(end);
  };

  const getEvents = (): void => {
    dispatch(setDateRange([startDate, endDate]));
    dispatch(getCalendar());
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <CalendarDatePickerItem label="start" date={startDate} setDate={handleStartDate} />
      <CalendarDatePickerItem label="end" date={endDate} setDate={handleEndDate} />
      <Button
        variant="contained"
        sx={{
          color: '#ffffff',
          fontWeight: 300,
          backgroundColor: 'transparent',
          textTransform: 'capitalize ',
          '&:hover': {
            backgroundColor: '#ffffff1a',
          },
        }}
        onClick={getEvents}
      >
        Get Events
      </Button>
    </Box>
  );
};

export { CalendarDatePicker };
