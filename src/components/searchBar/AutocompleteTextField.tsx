import { FC } from 'react';
import { AutocompleteRenderInputParams, TextField } from '@mui/material';

const AutocompleteTextField: FC<AutocompleteRenderInputParams> = (params) => {
  return (
    <TextField
      sx={{
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
      }}
      {...params}
      size="small"
      placeholder="Search for a city"
      data-testid="search-input"
    />
  );
};

export { AutocompleteTextField };
