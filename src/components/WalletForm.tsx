import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Dispatch, GlobalStateType } from '../types';
import { fetchCurrencies, submitExpense } from '../redux/actions';

const INITIAL_STATE = {
  value: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  description: '',

};

function WalletForm() {
  const [expense, setExpense] = useState(INITIAL_STATE);
  const { currency, description, method, tag, value } = expense;

  const { wallet: { expenses } } = useSelector((state: GlobalStateType) => state);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value: inputValue } = event.target;
    setExpense({
      ...expense,
      [name]: inputValue,
    });
  };

  const dispatch:Dispatch = useDispatch();

  useEffect(() => {
    async function getCurrencies() {
      dispatch(fetchCurrencies());
    }
    getCurrencies();
  }, [dispatch]);

  const fetchRates = async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    return data;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const idGenerator = expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 0;

    const rates = await fetchRates();

    const newExpense = {
      id: idGenerator,
      ...expense,
      exchangeRates: rates,
    };

    dispatch(submitExpense(newExpense));

    setExpense(INITIAL_STATE);
  };

  const { currencies } = useSelector((state: GlobalStateType) => state.wallet);

  return (
    <form
      className="form"
      onSubmit={ handleSubmit }
    >
      <label htmlFor="value">Valor</label>
      <input
        type="text"
        id="value"
        name="value"
        value={ value }
        data-testid="value-input"
        onChange={ handleChange }
      />

      <label htmlFor="description">Descrição da despesa</label>
      <input
        type="text"
        id="description"
        name="description"
        value={ description }
        data-testid="description-input"
        onChange={ handleChange }
      />

      <label htmlFor="currency">Moeda</label>
      <select
        id="currency"
        name="currency"
        value={ currency }
        data-testid="currency-input"
        onChange={ handleChange }
      >
        {
       currencies.map((item) => <option key={ item } value={ item }>{item}</option>)
       }
      </select>

      <label htmlFor="method">Método de pagamento</label>
      <select
        id="method"
        name="method"
        value={ method }
        data-testid="method-input"
        onChange={ handleChange }
      >
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>

      <label htmlFor="tag">Categoria da despesa</label>
      <select
        id="tag"
        name="tag"
        value={ tag }
        data-testid="tag-input"
        onChange={ handleChange }
      >
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>

      <button type="submit">Adicionar despesa</button>

    </form>
  );
}

export default WalletForm;
