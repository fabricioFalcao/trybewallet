import { useSelector } from 'react-redux';
import { GlobalStateType } from '../types';

function Header() {
  const {
    user: { email },
    wallet: { expenses },
  } = useSelector((state: GlobalStateType) => state);

  const sumExpenses = expenses.reduce((accumulator, expense) => {
    const { currency, value, exchangeRates } = expense;
    const rate = Number(exchangeRates[currency].ask);
    const convertedValue = rate * Number(value);
    return accumulator + convertedValue;
  }, 0).toFixed(2);

  return (
    <header>
      <p data-testid="email-field">{email}</p>
      <p>
        Despesa total:
        {' '}
        <span data-testid="total-field">{sumExpenses}</span>
        {' '}
        <span data-testid="header-currency-field">BRL</span>
      </p>
    </header>
  );
}
export default Header;
