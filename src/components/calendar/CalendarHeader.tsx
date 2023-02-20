import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { selectCalendar, useAppSelector } from '../../store/selectors';
import { CalendarMessages } from '../../models/componentsModels';
import { CalendarButton } from './CalendarButton';

const CalendarHeader: FC = () => {
  const { calendarItems } = useAppSelector(selectCalendar);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Typography
        sx={{
          maxWidth: 300,
          fontSize: 13,
          fontWeight: 100,
          color: '#ffffff',
          textAlign: 'center',
        }}
      >
        {calendarItems.length
          ? CalendarMessages.signOutMessage
          : CalendarMessages.signInMessage}
      </Typography>
      <CalendarButton />
    </Box>
  );
};

export { CalendarHeader };
