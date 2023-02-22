import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { selectCalendar, useAppSelector } from '../../store/selectors';
import { CalendarItem } from './CalendarItem';
import { CalendarMessages } from '../../models/componentsModels';
import { calendarEventsStyles } from '../../models/componentsStyles';

const CalendarEvents: FC = () => {
  const { calendarItems, token, error } = useAppSelector(selectCalendar);

  return (
    <Stack sx={calendarEventsStyles}>
      {calendarItems.length ? (
        calendarItems.map((item) => {
          return <CalendarItem key={item.id} item={item} />;
        })
      ) : (
        <Typography
          sx={{ fontSize: 16, fontWeight: 100, color: '#ffffff', textAlign: 'center' }}
        >
          {error || (token ? CalendarMessages.noEventsMessage : null)}
        </Typography>
      )}
    </Stack>
  );
};

export { CalendarEvents };
