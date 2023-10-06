import { vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockData from './helpers/mockData';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Wallet page tests', () => {
  beforeEach(() => {
    const MOCK_RESPONSE = { json: async () => mockData } as Response;
    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('1 - Verify if all elements are rendered on the /carteira path', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    screen.getByTestId('total-field');
    screen.getByTestId('value-input');
    screen.getByTestId('description-input');
    screen.getByTestId('currency-input');
    screen.getByTestId('method-input');
    screen.getByTestId('tag-input');
    screen.getByRole('button', { name: /adicionar despesa/i });
  });
});
