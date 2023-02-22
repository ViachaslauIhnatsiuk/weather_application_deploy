import { FC } from 'react';
import { Box, Paper } from '@mui/material';
import { calendarDate, calendarTime, convertCalendarTime } from '../../helpers/date';
import { ICalendarItem } from '../../models/api';
import {
  calendarItemStyles,
  calendarItemDateStyles,
} from '../../models/componentsStyles';

const CalendarItem: FC<{ item: ICalendarItem }> = ({ item }) => {
  return (
    <Box sx={calendarItemStyles}>
      <Paper elevation={4} sx={calendarItemDateStyles}>
        {item.start.dateTime ? (
          <>
            <Box sx={{ fontSize: 13 }}>
              {convertCalendarTime(item.created, calendarDate)}
            </Box>
            <Box sx={{ fontSize: 13, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box>{convertCalendarTime(item.start.dateTime, calendarTime)}</Box>
              <Box>{convertCalendarTime(item.end.dateTime, calendarTime)}</Box>
            </Box>
          </>
        ) : (
          <Box sx={{ fontSize: 14, textAlign: 'center' }}>All day long</Box>
        )}
      </Paper>
      <Box sx={{ fontSize: 12, letterSpacing: 0.2, fontWeight: 100 }}>{item.summary}</Box>
    </Box>
  );
};

export { CalendarItem };
