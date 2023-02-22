import { FC } from 'react';
import { AutocompleteRenderInputParams, TextField } from '@mui/material';
import { searchBarInputStyles } from '../../models/componentsStyles';

const AutocompleteTextField: FC<AutocompleteRenderInputParams> = (params) => {
  return (
    <TextField
      sx={searchBarInputStyles}
      {...params}
      size="small"
      placeholder="Search for a city"
      data-testid="search-input"
    />
  );
};

export { AutocompleteTextField };
