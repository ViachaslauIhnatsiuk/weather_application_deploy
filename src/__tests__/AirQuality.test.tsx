import '@testing-library/jest-dom';
import { AirQuality } from '../components/airQuality/AirQuality';
import { renderProvider } from '../helpers/renderProvider';

describe('air-quality', () => {
  it('component renders', () => {
    const { getByTestId } = renderProvider(<AirQuality />);
    expect(getByTestId('air-quality')).toBeInTheDocument();
    expect(getByTestId('air-quality-title')).toBeInTheDocument();
    expect(getByTestId('air-quality-items')).toBeInTheDocument();
  });
});
