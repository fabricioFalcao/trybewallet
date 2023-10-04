export type UserType = {
  email: string,
  password: string
};

export type ExpensesType = {
  id: string;
  value: string;
  currency: string;
  method: string;
  tag: string;
  description: string;
  exchangeRates: string;
};

export type WalletType = {
  currencies: string[],
  expenses: ExpensesType[],
  editor: boolean,
  idToEdit: number,
};

export type GlobalStateType = {
  user: UserType,
  wallet: WalletType,
};
