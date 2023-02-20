import { FC } from 'react';
import { Stack } from '@mui/material';
import { CurrentForecastTemperature } from './CurrentForecastTemperature';
import { CurrentForecastDate } from './CurrentForecastDate';
import { CurrentForecastInfo } from './CurrentForecastInfo';

const CurrentForecast: FC = () => {
  return (
    <Stack sx={{ color: '#ffffff' }}>
      <CurrentForecastTemperature />
      <CurrentForecastDate />
      <CurrentForecastInfo />
    </Stack>
  );
};

export { CurrentForecast };
