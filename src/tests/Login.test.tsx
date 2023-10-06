import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Login page tests', () => {
  const emailId = 'email-input';
  const passwordId = 'password-input';

  test('1 - Verify if email and passwords inputs and Entrar button are rendered on the home path', () => {
    renderWithRouterAndRedux(<App />);

    expect(global.location.pathname).toBe('/');

    screen.getByTestId(emailId);
    screen.getByTestId(passwordId);
    screen.getByRole('button', { name: /entrar/i });
  });

  test('2 - Verify if the Entrar button is only enabled when proper formats of email and password are provided', async () => {
    renderWithRouterAndRedux(<App />);

    const validEmail = 'valid@email.com';
    const invalidEmail = 'invalida@email';

    const validPassword = '123456';
    const invalidPassword = '12345';

    const emailInput = screen.getByTestId(emailId);
    const passwordInput = screen.getByTestId(passwordId);
    const enterButton = screen.getByRole('button', { name: /entrar/i });

    await userEvent.type(emailInput, invalidEmail);
    await userEvent.type(passwordInput, validPassword);
    expect(enterButton).toBeDisabled();

    await userEvent.clear(emailInput);
    await userEvent.clear(passwordInput);

    await userEvent.type(emailInput, validEmail);
    await userEvent.type(passwordInput, invalidPassword);
    expect(enterButton).toBeDisabled();

    await userEvent.clear(emailInput);
    await userEvent.clear(passwordInput);

    await userEvent.type(emailInput, validEmail);
    await userEvent.type(passwordInput, validPassword);
    expect(enterButton).toBeEnabled();
  });

  test('3 - Tests if after submitting the user form, the correct data is saved on the sate and the browser is redirected to the right path', async () => {
    const { store } = renderWithRouterAndRedux(<App />);

    const validEmail = 'pitty@email.com';
    const validPassword = '123456';

    const emailInput = screen.getByTestId(emailId);
    const passwordInput = screen.getByTestId(passwordId);
    const enterButton = screen.getByRole('button', { name: /entrar/i });

    await userEvent.type(emailInput, validEmail);
    await userEvent.type(passwordInput, validPassword);
    await userEvent.click(enterButton);

    screen.getByText(/despesa total:/i);
    expect(store.getState().user.email).toBe('pitty@email.com');
  });
});
