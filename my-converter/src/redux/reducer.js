const initialState = {
    arr: [],
    coinValue: 'bitcoin',
    coin: {
        symbol: 'btc',
        market_data: {
            current_price: {
                usd: 1
            }
        }
    },
    usd: {
        market_data: {
            current_price: {
                btk: 1,
                eth: 1
            }
        }
    },
    currencyPortfel: [
        {
            name: 'Dollar',
            symbol: 'usd',
            amount: 1000,
            quantity: 1000,
            img: 'img/premium-icon-dollar-1549885.png'
        }
    ],
    cryptoCurrencyPortfel: [
        {
            name: 'Ethereum',
            symbol: 'btc',
            amount: 500,
            quantity: 3,
            img: 'img/bitcoin_logo_icon_170476.svg'
        },
        {
            name: 'Bitcoin',
            symbol: 'eth',
            amount: 1800,
            quantity: 1,
            img: 'img/free-icon-ethereum-coins-2814943.png'
        }
    ]



}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_API':
            state.arr = [];
            const apiOne = action.payload.Result.prices;
            let days = Math.ceil(apiOne.length / 14);
            apiOne.reduce(function (p, c, i, a) {
                if (i % days === 0) state.arr.push([]);
                state.arr[state.arr.length - 1][i] = c;
                return state.arr;
            }, []);
            return { ...state, ...state.arr }
        case 'COIN_VALUE':
            state.coinValue = '';
            const valueOne = action.payload.value;
            state.coinValue = valueOne;
            return { ...state, ...state.coinValue }
        case 'ADD_API_COIN':
            state.coin = [];
            const coinOne = action.payload.Coin;
            state.coin = coinOne;
            return { ...state, ...state.coin }
        case 'ADD_API_USD':
            state.usd = [];
            const usdOne = action.payload.Usd;
            state.usd = usdOne;
            return { ...state, ...state.usd }
        default:
            return state;
    }
}
export default reducer;