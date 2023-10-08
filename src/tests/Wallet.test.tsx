import { vi } from 'vitest';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockData from './helpers/mockData';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';
import { initialState } from './helpers/initialState';

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

  test('2 - Verify if an expense can be added', async () => {
    await act(async () => {
      renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });
    });

    const value = '1800';
    const description = 'Uma Pitty Veia da cabeça branca, bunda branca e cu preto.';
    const currency = 'GBP';
    const method = 'Cartão de crédito';
    const tag = 'Trabalho';

    const valueInput = screen.getByTestId('value-input');
    const descriptionInput = screen.getByTestId('description-input');
    const currencyInput = await screen.findByTestId('currency-input');
    const methodInput = screen.getByTestId('method-input');
    const tagInput = screen.getByTestId('tag-input');

    const submitButton = screen.getByTestId('submit-button');

    expect(valueInput).toHaveTextContent('');
    expect(descriptionInput).toHaveTextContent('');
    expect(currencyInput).toHaveTextContent('USD');
    expect(methodInput).toHaveTextContent('Dinheiro');
    expect(tagInput).toHaveTextContent('Alimentação');

    await userEvent.type(valueInput, value);
    await userEvent.type(descriptionInput, description);
    await userEvent.selectOptions(currencyInput, currency);
    await userEvent.selectOptions(methodInput, method);
    await userEvent.selectOptions(tagInput, tag);

    await userEvent.click(submitButton);

    screen.getByRole('cell', { name: /uma pitty veia da cabeça branca, bunda branca e cu preto\./i });
    screen.getByRole('cell', { name: /trabalho/i });
    screen.getByRole('cell', { name: /cartão de crédito/i });
    screen.getByRole('cell', { name: '1800.00' });
    screen.getByRole('cell', { name: /libra esterlina\/real brasileiro/i });
    screen.getByRole('cell', { name: '6.02' });
    screen.getByRole('cell', { name: '10831.32' });

    screen.getByTestId('edit-btn');
    screen.getByTestId('delete-btn');
  });

  test('3 - Verify if an expense can be edited and deleted', async () => {
    const { store } = renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'], initialState });

    const currency = 'USD';
    const tag = 'Lazer';

    const submitButton = screen.getByTestId('submit-button');
    const currencyInput = await screen.findByTestId('currency-input');
    const tagInput = screen.getByTestId('tag-input');

    const editButton = screen.getByTestId('edit-btn');
    const deleteButton = screen.getByTestId('delete-btn');

    await userEvent.click(editButton);

    expect(currencyInput).toHaveTextContent('GBP');
    expect(tagInput).toHaveTextContent('Trabalho');

    await userEvent.selectOptions(currencyInput, currency);
    await userEvent.selectOptions(tagInput, tag);
    await userEvent.click(submitButton);

    const descriptionCell = screen.getByRole('cell', { name: /uma pitty veia da cabeça branca, bunda branca e cu preto\./i });
    const tagCell = screen.getByRole('cell', { name: /lazer/i });
    const currencyCel = screen.getByRole('cell', { name: /dólar americano\/real brasileiro/i });

    expect(descriptionCell).toBeInTheDocument();
    expect(tagCell).toBeInTheDocument();
    expect(currencyCel).toBeInTheDocument();

    expect(store.getState().wallet.expenses[0].currency).toBe(currency);
    expect(store.getState().wallet.expenses[0].tag).toBe(tag);

    await userEvent.click(deleteButton);

    expect(descriptionCell).not.toBeInTheDocument();
    expect(tagCell).not.toBeInTheDocument();
    expect(currencyCel).not.toBeInTheDocument();

    expect(store.getState().wallet.expenses).toEqual([]);
  });
});
