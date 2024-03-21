export const initialState = {
  user: {
    email: 'pitty@email.com',
    password: '123456',
  },
  wallet: {
    currencies: [
      'USD',
      'CAD',
      'GBP',
      'ARS',
      'BTC',
      'LTC',
      'EUR',
      'JPY',
      'CHF',
      'AUD',
      'CNY',
      'ILS',
      'ETH',
      'XRP',
      'DOGE',
    ],
    expenses: [
      {
        id: 11,
        value: '18000',
        currency: 'USD',
        method: 'Cartão de crédito',
        tag: 'Trabalho',
        description: 'Uma Pitty Veia da cabeça branca, bunda branca e cu preto.',
        exchangeRates: {
          USD: {
            code: 'USD',
            codein: 'BRL',
            name: 'Dólar Americano/Real Brasileiro',
            high: '5.22',
            low: '5.1427',
            varBid: '-0.0183',
            pctChange: '-0.35',
            bid: '5.1459',
            ask: '5.1491',
            timestamp: '1696625996',
            create_date: '2023-10-06 17:59:56',
          },
          USDT: {
            code: 'USD',
            codein: 'BRLT',
            name: 'Dólar Americano/Real Brasileiro Turismo',
            high: '5.245',
            low: '5.175',
            varBid: '-0.01',
            pctChange: '-0.19',
            bid: '5.03',
            ask: '5.34',
            timestamp: '1696617960',
            create_date: '2023-10-06 15:46:00',
          },
          CAD: {
            code: 'CAD',
            codein: 'BRL',
            name: 'Dólar Canadense/Real Brasileiro',
            high: '3.8044',
            low: '3.7501',
            varBid: '0.0083',
            pctChange: '0.22',
            bid: '3.7756',
            ask: '3.7812',
            timestamp: '1696625924',
            create_date: '2023-10-06 17:58:44',
          },
          GBP: {
            code: 'GBP',
            codein: 'BRL',
            name: 'Libra Esterlina/Real Brasileiro',
            high: '6.3412',
            low: '6.2657',
            varBid: '0.0018',
            pctChange: '0.03',
            bid: '6.2991',
            ask: '6.3028',
            timestamp: '1696625918',
            create_date: '2023-10-06 17:58:38',
          },
          ARS: {
            code: 'ARS',
            codein: 'BRL',
            name: 'Peso Argentino/Real Brasileiro',
            high: '0.0149',
            low: '0.0147',
            varBid: '0',
            pctChange: '0',
            bid: '0.0148',
            ask: '0.0148',
            timestamp: '1696625917',
            create_date: '2023-10-06 17:58:37',
          },
          BTC: {
            code: 'BTC',
            codein: 'BRL',
            name: 'Bitcoin/Real Brasileiro',
            high: '145661',
            low: '144236',
            varBid: '527',
            pctChange: '0.36',
            bid: '145058',
            ask: '145210',
            timestamp: '1696772524',
            create_date: '2023-10-08 10:42:04',
          },
          LTC: {
            code: 'LTC',
            codein: 'BRL',
            name: 'Litecoin/Real Brasileiro',
            high: '341.96',
            low: '337.34',
            varBid: '0.78',
            pctChange: '0.23',
            bid: '339.62',
            ask: '340.45',
            timestamp: '1696772514',
            create_date: '2023-10-08 10:41:54',
          },
          EUR: {
            code: 'EUR',
            codein: 'BRL',
            name: 'Euro/Real Brasileiro',
            high: '5.4818',
            low: '5.4231',
            varBid: '0.0143',
            pctChange: '0.26',
            bid: '5.4628',
            ask: '5.4708',
            timestamp: '1696625985',
            create_date: '2023-10-06 17:59:45',
          },
          JPY: {
            code: 'JPY',
            codein: 'BRL',
            name: 'Iene Japonês/Real Brasileiro',
            high: '0.03493',
            low: '0.03448',
            varBid: '-0.0003',
            pctChange: '-0.86',
            bid: '0.03447',
            ask: '0.03449',
            timestamp: '1696625916',
            create_date: '2023-10-06 17:58:36',
          },
          CHF: {
            code: 'CHF',
            codein: 'BRL',
            name: 'Franco Suíço/Real Brasileiro',
            high: '5.6948',
            low: '5.6332',
            varBid: '0.0102',
            pctChange: '0.18',
            bid: '5.6715',
            ask: '5.6798',
            timestamp: '1696625920',
            create_date: '2023-10-06 17:58:40',
          },
          AUD: {
            code: 'AUD',
            codein: 'BRL',
            name: 'Dólar Australiano/Real Brasileiro',
            high: '3.3044',
            low: '3.276',
            varBid: '0.0043',
            pctChange: '0.13',
            bid: '3.2953',
            ask: '3.3001',
            timestamp: '1696625920',
            create_date: '2023-10-06 17:58:40',
          },
          CNY: {
            code: 'CNY',
            codein: 'BRL',
            name: 'Yuan Chinês/Real Brasileiro',
            high: '0.7148',
            low: '0.7048',
            varBid: '-0.003',
            pctChange: '-0.43',
            bid: '0.7046',
            ask: '0.705',
            timestamp: '1696625942',
            create_date: '2023-10-06 17:59:02',
          },
          ILS: {
            code: 'ILS',
            codein: 'BRL',
            name: 'Novo Shekel Israelense/Real Brasileiro',
            high: '1.3493',
            low: '1.3356',
            varBid: '0.0009',
            pctChange: '0.07',
            bid: '1.3384',
            ask: '1.3391',
            timestamp: '1696625944',
            create_date: '2023-10-06 17:59:04',
          },
          ETH: {
            code: 'ETH',
            codein: 'BRL',
            name: 'Ethereum/Real Brasileiro',
            high: '8529.87',
            low: '8400.01',
            varBid: '-18.92',
            pctChange: '-0.22',
            bid: '8464.17',
            ask: '8498.21',
            timestamp: '1696772524',
            create_date: '2023-10-08 10:42:04',
          },
          XRP: {
            code: 'XRP',
            codein: 'BRL',
            name: 'XRP/Real Brasileiro',
            high: '2.72',
            low: '2.69',
            varBid: '0.01',
            pctChange: '0.32',
            bid: '2.71',
            ask: '2.71',
            timestamp: '1696772520',
            create_date: '2023-10-08 10:42:00',
          },
          DOGE: {
            code: 'DOGE',
            codein: 'BRL',
            name: 'Dogecoin/Real Brasileiro',
            high: '0.31716',
            low: '0.31383',
            varBid: '-0.00028',
            pctChange: '-0.09',
            bid: '0.31548',
            ask: '0.31548',
            timestamp: '1696772305',
            create_date: '2023-10-08 10:38:25',
          },
        },
      },
    ],
    editor: false,
    idToEdit: 0,
    isFetchig: false,
    errorMessage: '',
    isFetching: false,
  },
};