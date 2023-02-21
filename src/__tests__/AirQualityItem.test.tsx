import '@testing-library/jest-dom';
import { AirQualityItem } from '../components/airQuality/AirQualityItem';
import { renderProvider } from '../helpers/renderProvider';

describe('air-quality-item', () => {
  it('component renders with right values', () => {
    const { getByText } = renderProvider(<AirQualityItem title="Carbon" value={10} />);
    expect(getByText('Carbon')).toBeInTheDocument();
  });

  it('component snapshot', () => {
    const component = renderProvider(<AirQualityItem title="Carbon" value={10} />);
    expect(component).toMatchSnapshot();
  });
});
