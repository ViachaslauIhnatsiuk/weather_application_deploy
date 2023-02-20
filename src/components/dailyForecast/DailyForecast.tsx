import { FC } from 'react';
import { Stack } from '@mui/material';
import { DailyForecastItem } from './DailyForecastItem';
import { selectDailyForecast, useAppSelector } from '../../store/selectors';

const DailyForecast: FC = () => {
  const forecastday = useAppSelector(selectDailyForecast);

  return (
    <Stack
      sx={{
        width: { sm: '85%', xs: '100%' },
        maxHeight: 135,
        gap: 1,
        p: '10px 5px',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
          width: 0,
        },
      }}
    >
      {forecastday?.map((day) => (
        <DailyForecastItem key={day.date_epoch} day={day} />
      ))}
    </Stack>
  );
};

export { DailyForecast };
