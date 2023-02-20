import { FC } from 'react';
import { Button } from '@mui/material';
import { ModalButtonProps } from '../../models/componentsProps';

const ConfirmationModalButton: FC<ModalButtonProps> = ({ value, handler }) => {
  return (
    <Button
      sx={{
        color: '#ffffff',
        fontWeight: 200,
        '&:hover': {
          backgroundColor: '#ffffff1a',
        },
      }}
      onClick={handler}
    >
      {value}
    </Button>
  );
};

export { ConfirmationModalButton };
