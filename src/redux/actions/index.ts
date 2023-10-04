import { UserType, WalletType } from '../../types';

// Coloque aqui suas actions
export const USER_DATA = 'USER_DATA';
export const WALLET_DATA = 'WALLET_DATA';

export const submitUserData = (userData: UserType) => ({
  type: USER_DATA,
  payload: userData,
});

export const submitWalletData = (walletData: WalletType) => ({
  type: WALLET_DATA,
  payload: walletData,
});
