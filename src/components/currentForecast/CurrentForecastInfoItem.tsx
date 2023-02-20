import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { ForecastInfoItemProps } from '../../models/componentsProps';

const CurrentForecastInfoItem: FC<ForecastInfoItemProps> = (props) => {
  const { value, title, width } = props;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Box
        component="img"
        src={require(`../../assets/icons/${title.toLowerCase()}.svg`)}
        alt="weather icon"
        sx={{ width }}
      />
      <Typography sx={{ fontSize: 12, fontWeight: 100 }}>
        {title}: {value} km/h
      </Typography>
    </Box>
  );
};

export { CurrentForecastInfoItem };
