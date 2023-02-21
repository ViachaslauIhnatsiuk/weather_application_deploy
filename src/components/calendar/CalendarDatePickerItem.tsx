import { FC } from 'react';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { dialogProps } from '../../constants/calendar';
import { DatePickerItemProps } from '../../models/componentsProps';

const CalendarDatePickerItem: FC<DatePickerItemProps> = ({ label, date, setDate }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDatePicker
        DialogProps={dialogProps}
        label={label}
        inputFormat="DD/MM/YYYY"
        openTo="year"
        views={['year', 'month', 'day']}
        value={date}
        onChange={(newValue) => {
          setDate(newValue as string);
        }}
        renderInput={(params) => (
          <TextField
            size="small"
            sx={{
              maxWidth: 110,
              '& .MuiInputBase-root': {
                color: '#ffffff',
                fontSize: 14,
              },
              '& .MuiInputLabel-root': {
                color: '#ffffff',
                fontWeight: 300,
              },
            }}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export { CalendarDatePickerItem };
