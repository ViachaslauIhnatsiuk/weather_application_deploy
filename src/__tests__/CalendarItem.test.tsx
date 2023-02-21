import '@testing-library/jest-dom';
import { renderProvider } from '../helpers/renderProvider';
import { CalendarItem } from '../components/calendar/CalendarItem';
import { mockEvent } from '../constants/mockData';

describe('calendar-item', () => {
  it('component renders with right values', () => {
    const { getByText } = renderProvider(<CalendarItem item={mockEvent} />);
    expect(getByText('Add date picker')).toBeInTheDocument();
  });

  it('component snapshot', () => {
    const component = renderProvider(<CalendarItem item={mockEvent} />);
    expect(component).toMatchSnapshot();
  });
});
