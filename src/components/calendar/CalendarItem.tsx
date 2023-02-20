import { FC } from 'react';
import { Box, Paper } from '@mui/material';
import { calendarTime, convertCalendarTime } from '../../helpers/date';
import { ICalendarItem } from '../../models/api';

const CalendarItem: FC<{ item: ICalendarItem }> = ({ item }) => {
  return (
    <Box
      sx={{
        maxWidth: 400,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        p: 0.5,
        color: '#ffffff',
        fontWeight: 300,
        fontFamily: 'Roboto',
      }}
    >
      <Paper
        elevation={4}
        sx={{
          minWidth: 50,
          width: 50,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: '2px',
          color: '#ffffff',
          backgroundColor: 'transparent',
        }}
      >
        {item.start.dateTime ? (
          <>
            <Box sx={{ fontSize: 14 }}>
              {convertCalendarTime(item.start.dateTime, calendarTime)}
            </Box>
            <Box sx={{ fontSize: 14 }}>
              {convertCalendarTime(item.end.dateTime, calendarTime)}
            </Box>
          </>
        ) : (
          <Box sx={{ fontSize: 14, textAlign: 'center' }}>All day long</Box>
        )}
      </Paper>
      <Box sx={{ fontSize: 13, letterSpacing: 0.2, fontWeight: 100 }}>{item.summary}</Box>
    </Box>
  );
};

export { CalendarItem };
