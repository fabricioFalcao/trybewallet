import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type UserType = {
  email: string,
  password: string
};

export type ExpensesType = {
  value: string;
  description: string;
  currency: string;
  method: string;
  tag: string;
  id: number | undefined;
  exchangeRates: object
};

export type WalletType = {
  currencies: string[],
  expenses: ExpensesType[],
  editor: boolean,
  idToEdit: number,
  isFetchig: boolean,
  errorMessage: string,
};

export type GlobalStateType = {
  user: UserType,
  wallet: WalletType,
};

export type Dispatch = ThunkDispatch<GlobalStateType, null, AnyAction>;
