import { Dispatch, ExpensesType, UserType, WalletType } from '../../types';

// Coloque aqui suas actions
export const USER_DATA = 'USER_DATA';
export const WALLET_DATA = 'WALLET_DATA';
export const SUBMIT_EXPENSE = 'SUBMIT_EXPENSE';
export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCEEDED = 'REQUEST_SUCCEEDED';
export const REQUEST_FAILED = 'REQUEST_FAILED';

export const submitUserData = (userData: UserType) => ({
  type: USER_DATA,
  payload: userData,
});

export const submitWalletData = (walletData: WalletType) => ({
  type: WALLET_DATA,
  payload: walletData,
});

export const submitExpense = (expenseData: ExpensesType) => ({
  type: SUBMIT_EXPENSE,
  payload: expenseData,
});

// Fetch actions

const requestStarted = () => ({
  type: REQUEST_STARTED,
});

const requestSucceeded = (currencies: string[]) => ({
  type: REQUEST_SUCCEEDED,
  payload: currencies,
});

const requestFailed = (error: string) => ({
  type: REQUEST_FAILED,
  payload: error,
});

export const fetchCurrencies = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestStarted());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      const currencies = Object.keys(data).filter((currency) => currency !== 'USDT');
      dispatch(requestSucceeded(currencies));
    } catch (error: any) {
      dispatch(requestFailed(error.message));
    }
  };
};
