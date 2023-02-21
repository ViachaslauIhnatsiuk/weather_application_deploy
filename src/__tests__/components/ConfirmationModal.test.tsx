import '@testing-library/jest-dom';
import { ConfirmationModal } from '../../components/UI/ConfirmationModal';
import { renderProvider } from '../../helpers/renderProvider';

describe('calendar-item', () => {
  it('component renders', () => {
    const { getByTestId } = renderProvider(<ConfirmationModal />);
    expect(getByTestId('modal')).toBeInTheDocument();
  });
});
