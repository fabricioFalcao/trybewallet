import { useDispatch, useSelector } from 'react-redux';
import { GlobalStateType } from '../types';
import { deleteExpense } from '../redux/actions';

const tableHeader = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir',
];

function Table() {
  const { expenses } = useSelector((state: GlobalStateType) => state.wallet);
  const dispatch = useDispatch();

  return (
    <table>
      <thead>
        <tr>
          {tableHeader.map((title) => <th key={ title }>{title}</th>)}
        </tr>
      </thead>
      <tbody>
        {expenses.map(({
          currency, description, exchangeRates, id, method, tag, value,
        }) => (
          <tr key={ id }>
            <td>{description}</td>
            <td>{tag}</td>
            <td>{method}</td>
            <td>{Number(value).toFixed(2)}</td>
            <td>{exchangeRates[currency].name}</td>
            <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
            <td>{(Number(value) * Number(exchangeRates[currency].ask)).toFixed(2)}</td>
            <td>Real</td>
            <td>
              <button>Editar</button>
              <button
                data-testid="delete-btn"
                onClick={ () => dispatch(deleteExpense(id)) }
              >
                Excluir

              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
