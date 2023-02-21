import { FC } from 'react';
import { Autocomplete, Paper } from '@mui/material';
import { useAppDispatch } from '../../store/store';
import { selectLocation, useAppSelector } from '../../store/selectors';
import { setCurrentCity, setSearchCity } from '../../store/actions/locationActions';
import { getForecast } from '../../store/actions/forecastActions';
import { AutocompleteTextField } from './AutocompleteTextField';
import { ICity } from '../../models/api';

const SearchBar: FC = () => {
  const dispatch = useAppDispatch();
  const { cities, searchCity, currentCity } = useAppSelector(selectLocation);

  const searchCities = (newValue: string): void => {
    dispatch(setSearchCity(newValue || searchCity));
  };

  const setChosenCity = (value: string): void => {
    dispatch(setCurrentCity(value || currentCity));
    dispatch(getForecast());
  };

  return (
    <Paper
      elevation={4}
      sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'transparent' }}
    >
      <Autocomplete
        sx={{ '& .MuiSvgIcon-root': { color: '#ffffff' } }}
        componentsProps={{
          paper: {
            sx: {
              mt: 0.5,
              color: '#ffffff',
              backgroundColor: 'transparent',
              backdropFilter: 'blur(100px)',
            },
          },
        }}
        freeSolo
        value={currentCity}
        fullWidth
        popupIcon=""
        clearOnBlur={false}
        onInputChange={(_, newValue) => searchCities(newValue)}
        isOptionEqualToValue={(option, value) => option === value}
        onChange={(_, value) => setChosenCity(value as string)}
        options={cities.map(
          (option) => `${(option as ICity).name}, ${(option as ICity).region}`,
        )}
        renderInput={(params) => {
          return <AutocompleteTextField {...params} />;
        }}
        data-testid="search-bar"
      />
    </Paper>
  );
};

export { SearchBar };
