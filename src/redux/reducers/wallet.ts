// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { AnyAction } from 'redux';
import { WalletType } from '../../types';
import { WALLET_DATA } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const walletReducer = (state: WalletType = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case WALLET_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default walletReducer;
