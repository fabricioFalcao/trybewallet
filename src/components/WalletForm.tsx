import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Dispatch, GlobalStateType } from '../types';
import { editExpense, fetchCurrencies, submitExpense } from '../redux/actions';
import fetchRates from '../utils/fetchRates';

const INITIAL_STATE = {
  value: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  description: '',

};

function WalletForm() {
  const {
    wallet: {
      currencies,
      editor,
      expenses,
      idToEdit,
    },
  } = useSelector((state: GlobalStateType) => state);

  const dispatch:Dispatch = useDispatch();

  const [expense, setExpense] = useState(INITIAL_STATE);
  const { currency, description, method, tag, value } = expense;

  useEffect(() => {
    if (editor) {
      const editingExpense = expenses.find(({ id }) => id === idToEdit)!;
      setExpense({
        value: editingExpense.value,
        currency: editingExpense.currency,
        method: editingExpense.method,
        tag: editingExpense.tag,
        description: editingExpense.description,
      });
    }

    async function getCurrencies() {
      dispatch(fetchCurrencies());
    }
    getCurrencies();
  }, [dispatch, editor, expenses, idToEdit]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value: inputValue } = event.target;
    setExpense({
      ...expense,
      [name]: inputValue,
    });
  };

  const submitNewExpense = async () => {
    const idStored: number = JSON.parse(localStorage.getItem('idGenerator')!);
    if (idStored === null) {
      const idGenerator = 0;
      localStorage.setItem('idGenerator', JSON.stringify(idGenerator));
    } else {
      const idGenerator = idStored + 1;
      localStorage.setItem('idGenerator', JSON.stringify(idGenerator));
    }

    const rates = await fetchRates();

    const newExpense = {
      id: JSON.parse(localStorage.getItem('idGenerator')!),
      ...expense,
      exchangeRates: rates,
    };

    dispatch(submitExpense(newExpense));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (editor) {
      dispatch(editExpense(expense));
    } else {
      submitNewExpense();
    }

    setExpense(INITIAL_STATE);
  };

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

      <button type="submit">{editor ? 'Editar despesa' : 'Adicionar despesa'}</button>

    </form>
  );
}

export default WalletForm;
