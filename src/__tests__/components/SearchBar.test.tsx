import '@testing-library/jest-dom';
import { fireEvent, within } from '@testing-library/react';
import { SearchBar } from '../../components/searchBar/SearchBar';
import { renderProvider } from '../../helpers/renderProvider';

describe('search-bar', () => {
  it('component renders', () => {
    const { getByTestId } = renderProvider(<SearchBar />);
    expect(getByTestId('search-bar')).toBeInTheDocument();
  });

  it('search bar works', () => {
    const { getByTestId } = renderProvider(<SearchBar />);

    const searchBar = getByTestId('search-bar');
    const searchValue = 'London';
    const input: HTMLInputElement = within(getByTestId('search-bar')).getByRole(
      'combobox',
    );

    searchBar.focus();
    fireEvent.change(input, { target: { value: 'London' } });
    fireEvent.keyDown(searchBar, { key: 'ArrowDown' });
    fireEvent.keyDown(searchBar, { key: 'Enter' });

    expect(input.value).toEqual(searchValue);
  });

  it('search bar initial value exists', () => {
    const { getByTestId } = renderProvider(<SearchBar />);
    const input: HTMLInputElement = within(getByTestId('search-bar')).getByRole(
      'combobox',
    );

    expect(input.value).toBeTruthy();
  });
});
