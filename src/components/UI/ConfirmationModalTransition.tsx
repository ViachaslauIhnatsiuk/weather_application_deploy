import { forwardRef, ReactElement, Ref } from 'react';
import { Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<string, string>;
  },
  ref: Ref<HTMLElement>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export { Transition };
