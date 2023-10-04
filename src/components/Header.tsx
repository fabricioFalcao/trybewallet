import { useSelector } from 'react-redux';
import { GlobalStateType } from '../types';

function Header() {
  const { user: { email } } = useSelector((state: GlobalStateType) => state);

  return (
    <header>
      <p data-testid="email-field">{email}</p>
      <p>
        Despesa total:
        {' '}
        <span data-testid="total-field">0</span>
        {' '}
        <span data-testid="header-currency-field">BRL</span>
      </p>
    </header>
  );
}
export default Header;
