import store from "../redux/store";

//общий запрос
export function ApiRequestCriptoCoins() {
    // bitcoin,ethereum
    const url = `https://api.coingecko.com/api/v3/coins/bitcoin/contract/%20/market_chart/?vs_currency=usd&days=14`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            store.dispatch({
                type: 'ADD_API',
                payload: {
                    Result: data,
                }
            })
        }
        )
        .catch((error) => {
            console.error('Error:', error);
        });
}