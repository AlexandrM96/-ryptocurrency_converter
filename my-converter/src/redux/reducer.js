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
            id: 1,
            name: 'Dollar',
            symbol: 'usd',
            amount: 1000,
            quantity: 1000,
            img: 'img/premium-icon-dollar-1549885.png'
        }
    ],
    cryptoCurrencyPortfel: [
        {
            id: 1,
            name: 'Ethereum',
            symbol: 'eth',
            amount: 500,
            quantity: 30,
            img: 'img/bitcoin_logo_icon_170476.svg'
        },
        {
            id: 2,
            name: 'Bitcoin',
            symbol: 'btc',
            amount: 1800,
            quantity: 100,
            img: 'img/free-icon-ethereum-coins-2814943.png'
        }
    ],
    portfolioApiBtc: 28000,
    portfolioApiEth: 1700,
    windowStatus: '',
    itemEth: 0,
    itemBtc: 0
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
        case 'ADD_PORTFOLIO_COURS_BTC':
            state.portfolioApiBtc = '';
            const portfolioBtc = action.payload.BTC;
            state.portfolioApiBtc = portfolioBtc.market_data.current_price.usd;
            return { ...state, ...state.portfolioApiBtc }
        case 'ADD_PORTFOLIO_COURS_ETH':
            state.portfolioApiEth = '';
            const portfolioEth = action.payload.ETH;
            state.portfolioApiEth = portfolioEth.market_data.current_price.usd;
            return { ...state, ...state.portfolioApiEth }
        case 'CLICK_BTN_PLUS':
            const status = action.payload.windowStatus;
            state.itemEth = 0;
            state.itemBtc = 0;
            state.windowStatus = status;
            return { ...state, ...state.windowStatus, ...state.itemBtc, ...state.itemEth }
        case 'ADD_QUANTITY':
            const addItemQuantity = action.payload.addQuantity;
            const addItem = action.payload.addQuantitySymbol;
            addItem === 'btc' ?
                state.itemBtc = addItemQuantity
                :
                state.itemEth = addItemQuantity
            return { ...state, ...state.itemBtc, ...state.itemEth }
        case 'PURCHASE_AND_SELL':
            if (state.windowStatus === '') {
                return
            }
            if (state.windowStatus === 'Buy') {
                state.cryptoCurrencyPortfel[0].quantity += state.itemEth;
                state.cryptoCurrencyPortfel[1].quantity += state.itemBtc;
                state.itemEth = 0;
                state.itemBtc = 0;
            }
            if (state.windowStatus === 'Sell') {
                state.cryptoCurrencyPortfel[0].quantity -= state.itemEth;
                state.cryptoCurrencyPortfel[1].quantity -= state.itemBtc;
                state.itemEth = 0;
                state.itemBtc = 0;
            }
            return { ...state, ...state.cryptoCurrencyPortfel, ...state.itemBtc, ...state.itemEth }
        default:
            return state;
    }
}
export default reducer;