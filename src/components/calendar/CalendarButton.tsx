import { FC } from 'react';
import { Box, Button } from '@mui/material';
import { selectCalendar, useAppSelector } from '../../store/selectors';
import { useCalendar } from '../../hooks/useCalendar';
import { GoogleButton } from '../../models/componentsModels';
import google from '../../assets/icons/google.svg';

const CalendarButton: FC = () => {
  const { token } = useAppSelector(selectCalendar);
  const { signIn, signOut } = useCalendar();

  return (
    <Button
      sx={{
        color: '#ffffff',
        fontWeight: 200,
        minWidth: 120,
        backgroundColor: 'transparent',
        textTransform: 'capitalize ',
        '&:hover': {
          backgroundColor: '#ffffff1a',
        },
      }}
      variant="contained"
      onClick={!token ? signIn : signOut}
      data-testid="calendar-button"
    >
      <Box component="img" src={google} alt="google icon" sx={{ width: 20, mr: 1 }} />
      {!token ? GoogleButton.signIn : GoogleButton.signOut}
    </Button>
  );
};

export { CalendarButton };
