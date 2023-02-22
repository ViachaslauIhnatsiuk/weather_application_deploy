const appStyles = {
  height: '100vh',
  minWidth: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'background 1.5s',
};

const mainViewStyles = {
  width: '100%',
  height: { md: '70%', sm: '80%', xs: '90%' },
  display: 'flex',
  flexDirection: { md: 'row', sm: 'column', xs: 'column' },
  overflow: { md: 'visible ', sm: 'auto', xs: 'auto' },
  '&::-webkit-scrollbar': {
    width: 0,
  },
  backdropFilter: 'blur(12px)',
  px: { md: 6, sm: 6, xs: 3 },
  py: 3,
  gap: 5,
};

const calendarItemStyles = {
  maxWidth: 400,
  display: 'flex',
  alignItems: 'center',
  gap: 2,
  p: 0.5,
  color: '#ffffff',
  fontWeight: 300,
  fontFamily: 'Roboto',
};

const calendarItemDateStyles = {
  minWidth: 75,
  width: 75,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  p: '2px',
  color: '#ffffff',
  backgroundColor: 'transparent',
  gap: 0.3,
};

const airQualityStyles = {
  maxHeight: { md: 270, sm: 270, xs: 'auto' },
  gap: 1,
  p: '15px 5px',
  overflow: 'auto',
  '&::-webkit-scrollbar': {
    width: 0,
  },
};

const datePickerButtonStyles = {
  color: '#ffffff',
  fontWeight: 300,
  backgroundColor: 'transparent',
  textTransform: 'capitalize ',
  '&:hover': {
    backgroundColor: '#ffffff1a',
  },
};

const calendarButtonStyles = {
  color: '#ffffff',
  fontWeight: 200,
  minWidth: 120,
  backgroundColor: 'transparent',
  textTransform: 'capitalize ',
  '&:hover': {
    backgroundColor: '#ffffff1a',
  },
};

const datePickerStyles = {
  maxWidth: 110,
  '& .MuiInputBase-root': {
    color: '#ffffff',
    fontSize: 14,
  },
  '& .MuiInputLabel-root': {
    color: '#ffffff',
    fontWeight: 300,
  },
};

const calendarEventsStyles = {
  maxHeight: { md: 120, sm: 200, xs: 200 },
  gap: 1,
  overflow: 'auto',
  '&::-webkit-scrollbar': {
    width: 0,
  },
};

const currentForecastInfoStyles = {
  display: 'flex',
  flexDirection: { sm: 'row', xs: 'column' },
  alignItems: { sm: 'center', xs: 'flex-start' },
  gap: { sm: 2, xs: 1 },
  mt: 2,
};

const dailyForecastStyles = {
  width: { sm: '85%', xs: '100%' },
  maxHeight: 135,
  gap: 1,
  p: '10px 5px',
  overflow: 'auto',
  '&::-webkit-scrollbar': {
    width: 0,
  },
};

const dailyForecastItemStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  py: 0.5,
  px: 2,
  gap: 2,
  backgroundColor: 'transparent',
  color: '#ffffff',
};

const hourlyForecastStyles = {
  width: { sm: '85%', xs: '100%' },
  maxHeight: 135,
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: 0.9,
  p: '2px',
  overflow: 'auto',
  '&::-webkit-scrollbar': {
    width: 0,
  },
};

const hourlyForecastItemStyles = {
  width: 75,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  py: 1,
  gap: 1,
  backgroundColor: 'transparent',
  color: '#ffffff',
};

const searchBarInputStyles = {
  py: '2px',
  input: {
    color: '#ffffff',
    fontWeight: 100,
  },
  '& input::placeholder': {
    color: '#ffffff',
    fontWeight: 100,
  },
  '& .MuiOutlinedInput-root': {
    '& > fieldset': { border: 'none' },
  },
};

const searchBarComponentProps = {
  paper: {
    sx: {
      mt: 0.5,
      color: '#ffffff',
      backgroundColor: 'transparent',
      backdropFilter: 'blur(100px)',
    },
  },
};

export {
  appStyles,
  mainViewStyles,
  calendarItemStyles,
  calendarItemDateStyles,
  airQualityStyles,
  datePickerButtonStyles,
  calendarButtonStyles,
  datePickerStyles,
  calendarEventsStyles,
  currentForecastInfoStyles,
  dailyForecastStyles,
  dailyForecastItemStyles,
  hourlyForecastStyles,
  hourlyForecastItemStyles,
  searchBarInputStyles,
  searchBarComponentProps,
};
