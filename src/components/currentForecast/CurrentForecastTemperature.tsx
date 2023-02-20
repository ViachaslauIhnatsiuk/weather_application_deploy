import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { WeatherIcon } from '../UI/WeatherIcon';
import { selectForecast, useAppSelector } from '../../store/selectors';
import { defaultForecast } from '../../constants/forecast';
import degree from '../../assets/icons/degree.svg';

const CurrentForecastTemperature: FC = () => {
  const { forecast } = useAppSelector(selectForecast);

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <Typography
          sx={{ position: 'relative', fontSize: 70, lineHeight: 1.1, fontWeight: 200 }}
        >
          {Math.round(forecast?.current.temp_c as number) || defaultForecast.temperature}{' '}
          <Box
            component="img"
            src={degree}
            alt="degree icon"
            sx={{ position: 'absolute', top: 15, width: '24px' }}
          />
        </Typography>
        <WeatherIcon
          code={(forecast?.current.condition.code as number) || defaultForecast.code}
          size={defaultForecast.iconSize.large}
        />
      </Box>
      <Typography sx={{ fontSize: { sm: 44, xs: 34 }, fontWeight: 300 }}>
        {forecast?.location.name || defaultForecast.location}
      </Typography>
    </>
  );
};

export { CurrentForecastTemperature };
