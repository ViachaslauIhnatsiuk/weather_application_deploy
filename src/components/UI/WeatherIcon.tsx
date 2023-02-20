import { FC } from 'react';
import { Box } from '@mui/material';
import { WeatherIconProps } from '../../models/componentsProps';

const WeatherIcon: FC<WeatherIconProps> = ({ code = 1006, size = 36 }) => {
  return (
    <Box
      component="img"
      src={require(`../../assets/weather-icons/${String(code)}.png`)}
      alt="weather icon"
      sx={{ height: size }}
    />
  );
};

export { WeatherIcon };
