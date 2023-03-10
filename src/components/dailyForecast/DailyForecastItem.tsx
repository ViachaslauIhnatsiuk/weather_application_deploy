import { FC } from 'react';
import { Paper, Typography } from '@mui/material';
import { WeatherIcon } from '../UI/WeatherIcon';
import { IForecastDay } from '../../models/api';
import { convertDate, unixWeekday, unixDate } from '../../helpers/date';
import { defaultForecast } from '../../constants/forecast';
import { dailyForecastItemStyles } from '../../models/componentsStyles';

const DailyForecastItem: FC<{ day: IForecastDay }> = ({ day }) => {
  return (
    <Paper elevation={3} sx={dailyForecastItemStyles} data-testid="daily-forecast-item">
      <Typography sx={{ fontSize: { sm: 18, xs: 14 }, fontWeight: 100 }}>
        {convertDate(day.date_epoch, unixDate)}
      </Typography>
      <Typography sx={{ fontSize: { sm: 18, xs: 14 }, fontWeight: 100 }}>
        {convertDate(day.date_epoch, unixWeekday)}
      </Typography>
      <WeatherIcon
        code={day.day.condition.code || defaultForecast.code}
        size={defaultForecast.iconSize.small}
      />
      <Typography sx={{ fontSize: { sm: 18, xs: 14 }, fontWeight: 100 }}>
        {Math.round(day.day.avgtemp_c)}°C
      </Typography>
    </Paper>
  );
};

export { DailyForecastItem };
