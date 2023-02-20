import { useAppDispatch } from '../store/store';
import { apiCalendar } from '../api/calendar';
import { getCalendar, logIn, logOut } from '../store/actions/calendarActions';
import { ICallbackResponse } from '../models/componentsModels';

const useCalendar = () => {
  const dispatch = useAppDispatch();

  const signIn = (): void => {
    apiCalendar.handleAuthClick();

    apiCalendar.tokenClient.callback = (response: ICallbackResponse) => {
      const { token_type, access_token } = response;

      dispatch(logIn(`${token_type} ${access_token}`));
      dispatch(getCalendar());
    };
  };

  const signOut = (): void => {
    apiCalendar.handleSignoutClick();
    dispatch(logOut());
  };

  return { signIn, signOut };
};

export { useCalendar };
