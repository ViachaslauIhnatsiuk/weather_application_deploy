import { FC } from 'react';
import { Box, Button } from '@mui/material';
import { selectCalendar, useAppSelector } from '../../store/selectors';
import { useCalendar } from '../../hooks/useCalendar';
import { GoogleButton } from '../../models/componentsModels';
import { calendarButtonStyles } from '../../models/componentsStyles';
import google from '../../assets/icons/google.svg';

const CalendarButton: FC = () => {
  const { token } = useAppSelector(selectCalendar);
  const { signIn, signOut } = useCalendar();

  return (
    <Button
      sx={calendarButtonStyles}
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
