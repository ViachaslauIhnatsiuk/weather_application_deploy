import { FC } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { getDate, currentTime, currentWeekday, currentDate } from '../../helpers/date';

const CurrentForecastDate: FC = () => {
  return (
    <>
      <Typography sx={{ fontSize: { sm: 24, xs: 20 }, fontWeight: 200 }}>
        {getDate(currentDate)}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Typography sx={{ fontSize: 14, fontWeight: 100 }}>
          {getDate(currentWeekday)}
        </Typography>
        <Divider sx={{ height: '50%', borderColor: '#ffffff' }} orientation="vertical" />
        <Typography sx={{ fontSize: 14, fontWeight: 100 }}>
          {getDate(currentTime)}
        </Typography>
      </Box>
    </>
  );
};

export { CurrentForecastDate };
