import { FC } from 'react';
import { Paper, Typography } from '@mui/material';
import { AirQualityItemProps } from '../../models/componentsProps';

const AirQualityItem: FC<AirQualityItemProps> = (props) => {
  const { title = 'Quality', value = 0 } = props;

  return (
    <Paper
      elevation={6}
      sx={{
        width: 110,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 0.5,
        backgroundColor: 'transparent',
        color: '#ffffff',
      }}
    >
      <Typography sx={{ fontSize: 14, fontWeight: 200 }}>{title}</Typography>
      <Typography sx={{ fontSize: 28, fontWeight: 300, lineHeight: 1.3 }}>
        {value}
      </Typography>
    </Paper>
  );
};

export { AirQualityItem };
