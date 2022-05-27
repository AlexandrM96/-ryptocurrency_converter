const addCoins = {
    type: 'ADD_API',
    text: 'Add api'
  }

  export function criptoValue(coinValue) {
    return {
      type: 'COIN_VALUE',
      payload: {
        value: coinValue
      }
    }
  }

  const addCoin = {
    type: 'ADD_API_COIN',
    text: 'Add api coin'
  }

  const addUsd = {
    type: 'ADD_API_USD',
    text: 'Add api usd'
  }