import { FC } from 'react';
import { Box } from '@mui/material';
import { selectCurrentForecast, useAppSelector } from '../../store/selectors';
import { CurrentForecastInfoItem } from './CurrentForecastInfoItem';
import { forecastInfoTitles } from '../../constants/forecastInfoTitles';

const CurrentForecastInfo: FC = () => {
  const current = useAppSelector(selectCurrentForecast);

  const forecastInfo = [current?.wind_kph, current?.humidity, current?.precip_mm];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { sm: 'row', xs: 'column' },
        alignItems: { sm: 'center', xs: 'flex-start' },
        gap: { sm: 2, xs: 1 },
        mt: 2,
      }}
    >
      {forecastInfo.map((value, index) => {
        return (
          <CurrentForecastInfoItem
            key={forecastInfoTitles[index].title}
            value={value || 0}
            title={forecastInfoTitles[index].title}
            width={forecastInfoTitles[index].width}
          />
        );
      })}
    </Box>
  );
};

export { CurrentForecastInfo };
