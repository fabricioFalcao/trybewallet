// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { AnyAction } from 'redux';
import { WalletType } from '../../types';
import {
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
    default:
      return state;
  }
};

export default walletReducer;
