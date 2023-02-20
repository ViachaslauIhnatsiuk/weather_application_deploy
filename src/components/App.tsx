import { FC } from 'react';
import { Container } from '@mui/material';
import { MainView } from './MainView';
import { ConfirmationModal } from './UI/ConfirmationModal';
import { useBackground } from '../hooks/useBackground';

const App: FC = () => {
  const { changeBackgroundImage } = useBackground();

  return (
    <Container
      sx={{
        height: '100vh',
        minWidth: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: `url(${require(`../assets/background-images/${changeBackgroundImage()}`)}) 50% 0/cover no-repeat`,
        transition: 'background 1.5s',
      }}
    >
      <ConfirmationModal />
      <MainView />
    </Container>
  );
};

export { App };
