import { FC } from 'react';
import { Stack } from '@mui/material';
import { DailyForecastItem } from './DailyForecastItem';
import { selectDailyForecast, useAppSelector } from '../../store/selectors';
import { dailyForecastStyles } from '../../models/componentsStyles';

const DailyForecast: FC = () => {
  const forecastday = useAppSelector(selectDailyForecast);

  return (
    <Stack sx={dailyForecastStyles}>
      {forecastday?.map((day) => (
        <DailyForecastItem key={day.date_epoch} day={day} />
      ))}
    </Stack>
  );
};

export { DailyForecast };
