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

const addPortfolioCours = {
  type: 'ADD_PORTFOLIO_COURS_BTC',
  text: 'Add portfolio cours'
}

const addPortfolioCoursTwo = {
  type: 'ADD_PORTFOLIO_COURS_ETH',
  text: 'Add portfolio cours'
}

export function clickBtnPlus(result) {
  return {
    type: 'CLICK_BTN_PLUS',
    payload: {
      windowStatus: result
    }
  }
}

export function addQuantity(quantity, symbol) {
  return {
    type: 'ADD_QUANTITY',
    payload: {
      addQuantity: quantity,
      addQuantitySymbol: symbol
    }
  }
}

export function purchaseAndSell(sum) {
  return {
    type: 'PURCHASE_AND_SELL',
    payload: {
      sum: sum
    }
  }
}