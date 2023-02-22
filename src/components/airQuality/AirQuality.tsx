import { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { selectAirQuality, useAppSelector } from '../../store/selectors';
import { AirQualityItem } from './AirQualityItem';
import { airQualityTitles } from '../../constants/airQualityTitles';
import { airQualityStyles } from '../../models/componentsStyles';

const AirQuality: FC = () => {
  const airQuality = useAppSelector(selectAirQuality);

  return (
    <Stack sx={airQualityStyles} data-testid="air-quality">
      <Typography
        sx={{ fontSize: 22, fontWeight: 300, color: '#ffffff', pl: 1 }}
        data-testid="air-quality-title"
      >
        {airQuality && 'AIR QUALITY'}
      </Typography>
      <Box
        sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}
        data-testid="air-quality-items"
      >
        {Object.values(airQuality || {}).map((value, index) => {
          return (
            <AirQualityItem
              key={airQualityTitles[index]}
              title={airQualityTitles[index]}
              value={Math.round(value)}
            />
          );
        })}
      </Box>
    </Stack>
  );
};

export { AirQuality };
