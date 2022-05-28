import store from "../redux/store";
// bitcoin,ethereum
export function ApiRequestCriptoCoinsHistory(value) {
    let url = `https://api.coingecko.com/api/v3/coins/${value}/contract/%20/market_chart/?vs_currency=usd&days=14`;
    value === '' ?
        url = `https://api.coingecko.com/api/v3/coins/bitcoin/contract/%20/market_chart/?vs_currency=usd&days=14` :
        url = `https://api.coingecko.com/api/v3/coins/${value}/contract/%20/market_chart/?vs_currency=usd&days=14`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            store.dispatch({
                type: 'ADD_API',
                payload: {
                    Result: data
                }
            })
        }
        )
        .catch((error) => {
            console.error('Error:', error);
        });
}

export function ApiRequestCriptoCoin(value) {
    let url = `https://api.coingecko.com/api/v3/coins/${value}`;
    value === '' ?
        url = `https://api.coingecko.com/api/v3/coins/ethereum` :
        url = `https://api.coingecko.com/api/v3/coins/${value}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            store.dispatch({
                type: 'ADD_API_COIN',
                payload: {
                    Coin: data
                }
            })
        }
        )
        .catch((error) => {
            console.error('Error:', error);
        });
}

export function ApiRequestUSD() {
    let url = `https://api.coingecko.com/api/v3/coins/usd`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            store.dispatch({
                type: 'ADD_API_USD',
                payload: {
                    Usd: data
                }
            })
        }
        )
        .catch((error) => {
            console.error('Error:', error);
        });
}