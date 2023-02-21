import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const renderProvider = (component: JSX.Element) => {
  return render(<Provider store={store}>{component}</Provider>);
};

export { renderProvider };
