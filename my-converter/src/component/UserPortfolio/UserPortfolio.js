import React, { Component } from 'react';
import './UserPortfolio.css';
import { connect } from 'react-redux';
import CurrencyItem from '../CurrencyItem/CurrencyItem';
import CurrencyItemPortfolio from '../CurrencyItemPortfolio/CurrencyItemPortfolio';
import { clickBtnPlus } from '../../redux/action';
import { purchaseAndSell } from '../../redux/action';

const mapDispatchToProps = dispatch => ({
    click: (result) => dispatch(clickBtnPlus(result)),
    clickPurchaseAndSale: (sum) => dispatch(purchaseAndSell(sum))
})

const mapStateToProps = (state) => {
    return {
        cryptoCurrencyPortfel: state.cryptoCurrencyPortfel,
        currencyPortfel: state.currencyPortfel,
        portfolioApiBtc: state.portfolioApiBtc,
        portfolioApiEth: state.portfolioApiEth,
        addItemBtc: state.itemBtc,
        addItemEth: state.itemEth
    };
};

class UserPortfolio extends Component {

    state = {
        flag: true,
        condition: '',
        conditionTwo: '',
        dell: 0
    }

    stateСhangeBuy = () => {
        this.setState(prevValue => ({
            condition: 'Buy',
            conditionTwo: 'Purchase',
            flag: false
        }), () => {
            return this.props.click(this.state.condition);
        })
    }

    stateСhangeSell = () => {
        this.setState(prevValue => ({
            condition: 'Sell',
            conditionTwo: 'Sale',
            flag: false
        }), () => {
            return this.props.click(this.state.condition);
        })
    }

    closeButton = () => {
        this.setState(prevValue => ({
            condition: '',
            conditionTwo: '',
            flag: true
        }), () => {
            return this.props.click(this.state.condition, this.state.dell);
        })
    }

    clickPurchaseAndSale = () => {
        return
    }

    render() {
        const cryptoCurrencyPortfolio = this.props.cryptoCurrencyPortfel;
        const currencyPortfolio = this.props.currencyPortfel;
        const apiBtc = this.props.portfolioApiBtc;
        const apiEth = this.props.portfolioApiEth;
        const addItemBtc = this.props.addItemBtc;
        const addItemEth = this.props.addItemEth;
        const resultBtc = addItemBtc * apiBtc;
        const resultEth = addItemEth * apiEth;
        const total = resultBtc + resultEth;
        const sum = (
            (cryptoCurrencyPortfolio[0].quantity * apiEth)
            + (cryptoCurrencyPortfolio[1].quantity * apiBtc)
        ) + currencyPortfolio[0].amount;

        return (
            <div className='user-portfolio'>
                <div className='user-portfolio__container'>
                    <div className={
                        this.state.flag === true ?
                            'user-portfolio__container-true'
                            :
                            'user-portfolio__container-false'}
                    >
                        <div className='user-portfolio__info'>
                            <h3 className='user-portfolio__score-info-title'>Brokerage account in dollars</h3>
                            <p className='user-portfolio__info-score'>{`${sum} $`}</p>
                            <div className='user-portfolio__info-buttons'>
                                <button onClick={this.stateСhangeBuy} className='user-portfolio__info-button'>Buy</button>
                                <button onClick={this.stateСhangeSell} className='user-portfolio__info-button'>Sell</button>
                            </div>
                        </div>
                        <div className='user-portfolio__portfolio'>
                            <div className='user-portfolio__portfolio-cryptocurrency'>
                                <h3>Cryptocurrency</h3>
                                <div>
                                    {cryptoCurrencyPortfolio.map((item) => (
                                        <div className='coin' key={item.id}>
                                            <CurrencyItem {...item} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='user-portfolio__portfolio-сurrency'>
                                <h3>Currency</h3>
                                <div>
                                    {currencyPortfolio.map((item) => (
                                        <div className='coin' key={item.id}>
                                            <CurrencyItem {...item} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={
                        this.state.flag === true ?
                            'user-portfolio__window-none'
                            :
                            'user-portfolio__window'}
                    >
                        <div className='user-portfolio__window-container'>
                            <button onClick={this.closeButton} className='user-portfolio__window-container-button-x'>X</button>
                            <h4 className='user-portfolio__window-title'>{this.state.conditionTwo}</h4>
                            <div className='user-portfolio__window-container-item'>
                                {cryptoCurrencyPortfolio.map((item) => (
                                    <div className='coin' key={item.id}>
                                        <CurrencyItemPortfolio  {...item} />
                                    </div>
                                ))}
                            </div>
                            <div className='user-portfolio__window-container-sum'>{`Total: ${total} $`}</div>
                            <div className='user-portfolio__window-container-buttons'>
                                <button
                                    onClick={this.props.clickPurchaseAndSale}
                                    className='user-portfolio__info-button'
                                >
                                    {this.state.condition}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPortfolio);