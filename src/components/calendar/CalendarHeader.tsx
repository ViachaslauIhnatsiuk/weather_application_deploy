import { FC } from 'react';
import { Typography } from '@mui/material';
import { selectCalendar, useAppSelector } from '../../store/selectors';
import { CalendarMessages } from '../../models/componentsModels';

const CalendarHeader: FC = () => {
  const { calendarItems } = useAppSelector(selectCalendar);

  return (
    <Typography
      sx={{ fontSize: 16, fontWeight: 100, color: '#ffffff', textAlign: 'center' }}
    >
      {calendarItems.length
        ? CalendarMessages.signOutMessage
        : CalendarMessages.signInMessage}
    </Typography>
  );
};

export { CalendarHeader };
