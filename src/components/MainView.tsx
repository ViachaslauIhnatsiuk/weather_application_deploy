import { FC } from 'react';
import { Container, Paper, Stack } from '@mui/material';
import { SearchBar } from './searchBar/SearchBar';
import { CurrentForecast } from './currentForecast/CurrentForecast';
import { AirQuality } from './airQuality/AirQuality';
import { HourlyForecast } from './hourlyForecast/HourlyForecast';
import { DailyForecast } from './dailyForecast/DailyForecast';
import { Calendar } from './calendar/Calendar';
import { useBackground } from '../hooks/useBackground';

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
        sx={{
          width: '100%',
          height: { md: '70%', sm: '80%', xs: '90%' },
          display: 'flex',
          flexDirection: { md: 'row', sm: 'column', xs: 'column' },
          overflow: { md: 'visible ', sm: 'auto', xs: 'auto' },
          '&::-webkit-scrollbar': {
            width: 0,
          },
          backgroundColor: changeBackground(),
          backdropFilter: 'blur(12px)',
          px: { md: 6, sm: 6, xs: 3 },
          py: 3,
          gap: 5,
        }}
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
