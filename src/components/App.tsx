import { FC } from 'react';
import { Container } from '@mui/material';
import { MainView } from './MainView';
import { ConfirmationModal } from './UI/ConfirmationModal';
import { useBackground } from '../hooks/useBackground';
import { appStyles } from '../models/componentsStyles';

const App: FC = () => {
  const { changeBackgroundImage } = useBackground();

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
