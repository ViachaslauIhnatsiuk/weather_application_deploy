import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { selectCalendar, useAppSelector } from '../../store/selectors';
import { CalendarItem } from './CalendarItem';
import { CalendarMessages } from '../../models/componentsModels';

const CalendarEvents: FC = () => {
  const { calendarItems, token, error } = useAppSelector(selectCalendar);

  return (
    <Stack
      sx={{
        maxHeight: { md: 120, sm: 200, xs: 200 },
        gap: 1,
        overflow: 'auto',
        '&::-webkit-scrollbar': {
          width: 0,
        },
      }}
    >
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
