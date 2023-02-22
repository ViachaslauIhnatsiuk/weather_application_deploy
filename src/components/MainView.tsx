import { FC } from 'react';
import { Container, Paper, Stack } from '@mui/material';
import { SearchBar } from './searchBar/SearchBar';
import { CurrentForecast } from './currentForecast/CurrentForecast';
import { AirQuality } from './airQuality/AirQuality';
import { HourlyForecast } from './hourlyForecast/HourlyForecast';
import { DailyForecast } from './dailyForecast/DailyForecast';
import { Calendar } from './calendar/Calendar';
import { useBackground } from '../hooks/useBackground';
import { mainViewStyles } from '../models/componentsStyles';

const MainView: FC = () => {
  const { changeBackground } = useBackground();

  return (
    <Container
      maxWidth="lg"
      disableGutters
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        elevation={12}
        sx={{ ...mainViewStyles, backgroundColor: changeBackground() }}
      >
        <Stack sx={{ flex: '1 1 50%', gap: 5 }}>
          <SearchBar />
          <CurrentForecast />
          <AirQuality />
        </Stack>
        <Stack sx={{ flex: '1 1 50%', gap: 5, alignItems: 'center' }}>
          <Calendar />
          <DailyForecast />
          <HourlyForecast />
        </Stack>
      </Paper>
    </Container>
  );
};

export { MainView };
