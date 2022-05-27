const initialState = {
    arr: [],
    coinValue: '',
    coin: [],
    usd: []
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
            console.log(valueOne);
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