import { FC, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import { ConfirmationModalButton } from './ConfirmationModalButton';
import { useAppDispatch } from '../../store/store';
import { getLocation } from '../../store/actions/locationActions';
import { getForecast } from '../../store/actions/forecastActions';

const ConfirmationModal: FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  const handleConfirmation = (): void => {
    dispatch(getLocation());
    setOpen(false);
  };

  const handleRejection = (): void => {
    dispatch(getForecast());
    setOpen(false);
  };

  return (
    <Dialog
      sx={{
        '& .MuiPaper-root': {
          backgroundColor: '#3d3d3d80',
          backdropFilter: 'blur(4px)',
        },
      }}
      transitionDuration={400}
      open={open}
      keepMounted
      onClose={handleRejection}
      data-testid="modal"
    >
      <DialogContent>
        <DialogContentText sx={{ color: '#ffffff', fontWeight: 200 }}>
          Allow access to your current location?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <ConfirmationModalButton value="no" handler={handleRejection} />
        <ConfirmationModalButton value="yes" handler={handleConfirmation} />
      </DialogActions>
    </Dialog>
  );
};

export { ConfirmationModal };
