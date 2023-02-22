import { FC, useEffect } from 'react';
import { Container } from '@mui/material';
import { MainView } from './MainView';
import { ConfirmationModal } from './UI/ConfirmationModal';
import { useBackground } from '../hooks/useBackground';
import { appStyles } from '../models/componentsStyles';
import { useAppDispatch } from '../store/store';
import { getForecast } from '../store/actions/forecastActions';

const App: FC = () => {
  const { changeBackgroundImage } = useBackground();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getForecast());
  }, []);

  return (
    <Container
      sx={{
        ...appStyles,
        background: `url(${require(`../assets/background-images/${changeBackgroundImage()}`)}) 50% 0/cover no-repeat`,
      }}
    >
      <ConfirmationModal />
      <MainView />
    </Container>
  );
};

export { App };
