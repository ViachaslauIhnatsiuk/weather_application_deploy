import { FC } from 'react';
import { Box } from '@mui/material';
import { HourlyForecastItem } from './HourlyForecastItem';
import { selectDailyForecast, useAppSelector } from '../../store/selectors';
import { hourlyForecastStyles } from '../../models/componentsStyles';

const HourlyForecast: FC = () => {
  const forecastday = useAppSelector(selectDailyForecast);

  return (
    <Box sx={hourlyForecastStyles}>
      {forecastday?.[0].hour.map((hour) => (
        <HourlyForecastItem key={hour.time_epoch} hour={hour} />
      ))}
    </Box>
  );
};

export { HourlyForecast };
