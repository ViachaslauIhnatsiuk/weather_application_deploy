import { FC } from 'react';
import { Box } from '@mui/material';
import { HourlyForecastItem } from './HourlyForecastItem';
import { selectDailyForecast, useAppSelector } from '../../store/selectors';

const HourlyForecast: FC = () => {
  const forecastday = useAppSelector(selectDailyForecast);

  return (
    <Box
      sx={{
        width: { sm: '85%', xs: '100%' },
        maxHeight: 135,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 0.9,
        p: '2px',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
          width: 0,
        },
      }}
    >
      {forecastday?.[0].hour.map((hour) => (
        <HourlyForecastItem key={hour.time_epoch} hour={hour} />
      ))}
    </Box>
  );
};

export { HourlyForecast };
