import React, { Component } from 'react';
import './CurrencyItemPortfolio.css';
import { addQuantity } from '../../redux/action';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
    clickBtnProps: (quantity, symbol) => dispatch(addQuantity(quantity, symbol))
})

class CurrencyItemPortfolio extends Component {

    state = {
        btc: 0,
        eth: 0
    }

    clickBtn = () => {
        this.props.symbol === 'btc' ?
            this.setState(prevValue => ({
                btc: this.state.btc + 1
            }), () => {
                return this.props.clickBtnProps(this.state.btc, this.props.symbol);
            })
            :
            this.setState(prevValue => ({
                eth: this.state.eth + 1
            }), () => {
                return this.props.clickBtnProps(this.state.eth,this.props.symbol);
            })
    }

    render() {
        const { name, img, quantity } = this.props;
        return (
            <div className='currency-item-portfolio__container'>
                <div className='currency-item-portfolio__container-item'>
                    <button onClick={this.clickBtn} className='currency-item-portfolio__container-button'>
                        +
                    </button>
                    <div className='currency-item-portfolio__container-image'>
                        <img src={img} alt='Cryptocurrency' />
                    </div>
                    <div className='currency-item-portfolio__container-text'>
                        {name}
                    </div>
                </div>
                <div className='currency-item-portfolio__container-text'>
                    x {quantity}
                </div>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(CurrencyItemPortfolio);