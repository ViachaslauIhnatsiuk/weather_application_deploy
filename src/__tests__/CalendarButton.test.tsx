import '@testing-library/jest-dom';
import { CalendarButton } from '../components/calendar/CalendarButton';
import { renderProvider } from '../helpers/renderProvider';

describe('calendar-button', () => {
  it('component renders', () => {
    const { getByRole } = renderProvider(<CalendarButton />);
    expect(getByRole('button')).toBeInTheDocument();
  });

  it('component renders with right value', () => {
    const { getByRole } = renderProvider(<CalendarButton />);
    const button = getByRole('button');

    expect(button.textContent).toEqual('Sign In');
  });
});
