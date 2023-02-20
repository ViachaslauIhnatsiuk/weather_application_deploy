import { FC } from 'react';
import { Paper, Typography } from '@mui/material';
import { WeatherIcon } from '../UI/WeatherIcon';
import { IForecastHour } from '../../models/api';
import { defaultForecast } from '../../constants/forecast';

const HourlyForecastItem: FC<{ hour: IForecastHour }> = ({ hour }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: 75,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 1,
        gap: 1,
        backgroundColor: 'transparent',
        color: '#ffffff',
      }}
    >
      <Typography sx={{ fontSize: 18, fontWeight: 100 }}>
        {hour.time.slice(-5)}
      </Typography>
      <WeatherIcon
        code={hour.condition.code || defaultForecast.code}
        size={defaultForecast.iconSize.small}
      />
      <Typography sx={{ fontSize: 18, fontWeight: 100 }}>
        {Math.round(hour.temp_c)}°C
      </Typography>
    </Paper>
  );
};

export { HourlyForecastItem };
