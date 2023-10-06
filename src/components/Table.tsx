import { useSelector } from 'react-redux';
import { GlobalStateType } from '../types';

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
  console.log(expenses);

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
              <button>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
