import { AnyAction } from 'redux';
import { UserType } from '../../types';
import { USER_DATA } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
  password: '',
};

const userReducer = (state: UserType = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
