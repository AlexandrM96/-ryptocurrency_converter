const initialState = {
    arr: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_API':
            const apiOne = action.payload.Result.prices;
            // console.log(apiOne)
            let days = Math.ceil(apiOne.length / 14);
            apiOne.reduce(function (p, c, i, a) {
                if (i % days === 0) state.arr.push([]);
                state.arr[state.arr.length - 1][i] = c;
                return state.arr;
            }, []);
            // console.log(state.arr);
            return { ...state, ...state.arr }
        default:
            return state;
    }
}
export default reducer;