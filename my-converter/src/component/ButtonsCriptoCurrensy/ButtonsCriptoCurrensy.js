import React, { Component } from 'react';
import './ButtonsCriptoCurrensy.css';
import { ApiRequestCriptoCoinsHistory } from '../../api_request/api.reqest';
import { ApiRequestCriptoCoin } from '../../api_request/api.reqest';
import { connect } from 'react-redux';
import { criptoValue } from '../../redux/action';
import { ApiRequestUSD } from '../../api_request/api.reqest';

const mapDispatchToProps = dispatch => ({
    criptoValue: (coinValue) => dispatch(criptoValue(coinValue))
})

class ButtonsCriptoCurrensy extends Component {
    state = {
        coinValue: ''
    }

    bitcoinClick = () => {
        const value = 'bitcoin';
        ApiRequestCriptoCoinsHistory(value);
        ApiRequestCriptoCoin(value);
        ApiRequestUSD()
        this.setState(prevValue => ({
            coinValue: value
        }), () => {
            return this.props.criptoValue(this.state);
        })
    }

    EthereumClick = () => {
        const value = 'ethereum';
        ApiRequestCriptoCoinsHistory(value);
        ApiRequestCriptoCoin(value);
        ApiRequestUSD();
        this.setState(prevValue => ({
            coinValue: value
        }), () => {
            return this.props.criptoValue(this.state);
        })
    }

    render() {
        return (
            <div className='buttons-cripto-currensy'>
                <div className='buttons-cripto-currensy__container'>
                    <div
                        onClick={this.bitcoinClick}
                        className='buttons-cripto-currensy__container-button'>
                        <div className='buttons-cripto-currensy__container-image'>
                            <img src='img/bitcoin_logo_icon_170476.svg' alt='Bitcoin' />
                        </div>
                        <div className='buttons-cripto-currensy__container-text'>Bitcoin</div>
                    </div>
                    <div
                        onClick={this.EthereumClick}
                        className='buttons-cripto-currensy__container-button'>
                        <div className='buttons-cripto-currensy__container-image'>
                            <img src='img/free-icon-ethereum-coins-2814943.png' alt='Ethereum' />
                        </div>
                        <div className='buttons-cripto-currensy__container-text'>Ethereum</div>
                    </div>
                </div>
            </div>

        )
    }
}

export default connect(null, mapDispatchToProps)(ButtonsCriptoCurrensy);