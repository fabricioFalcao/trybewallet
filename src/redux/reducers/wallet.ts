// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { AnyAction } from 'redux';
import { WalletType } from '../../types';
import {
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  ENABLE_EDITOR,
  REQUEST_FAILED,
  REQUEST_STARTED,
  REQUEST_SUCCEEDED,
  SUBMIT_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  isFetchig: false,
  errorMessage: '',
};

const editedExpenses = (state: WalletType, action: AnyAction) => {
  return {
    ...state,
    expenses: state.expenses.map((expense) => {
      if (expense.id === state.idToEdit) {
        return { ...expense, ...action.payload };
      }
      return expense;
    }),
    editor: false,
    idToEdit: 0,
  };
};

const walletReducer = (state: WalletType = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
        errorMessage: '',
        currencies: [],
      };
    case REQUEST_SUCCEEDED:
      return {
        ...state,
        isFetching: false,
        currencies: action.payload,
        errorMessage: '',
      };
    case REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
        currencies: [],
      };
    case SUBMIT_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== action.payload),
      };
    case ENABLE_EDITOR:
      return {
        ...state,
        editor: true,
        idToEdit: action.payload,
      };
    case EDIT_EXPENSE:
      return editedExpenses(state, action);

    default:
      return state;
  }
};

export default walletReducer;
