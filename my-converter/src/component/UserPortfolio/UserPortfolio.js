import React, { Component } from 'react';
import './UserPortfolio.css';
import { connect } from 'react-redux';
import CurrencyItem from '../CurrencyItem/CurrencyItem';

const mapStateToProps = (state) => {
    return {
        cryptoCurrencyPortfel: state.cryptoCurrencyPortfel,
        currencyPortfel: state.currencyPortfel
    };
};

class UserPortfolio extends Component {

    render() {
        const cryptoCurrencyPortfolio = this.props.cryptoCurrencyPortfel;
        const currencyPortfolio = this.props.currencyPortfel;
        return (
            <div className='user-portfolio'>
                <div className='user-portfolio__container'>
                    <div className='user-portfolio__info'>
                        <h3 className='user-portfolio__score-info-title'>Brokerage account in dollars</h3>
                        <p className='user-portfolio__info-score'>77777 $</p>
                        <div className='user-portfolio__info-buttons'>
                            <button className='user-portfolio__info-button'>Buy</button>
                            <button className='user-portfolio__info-button'>Sell</button>
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
            </div>
        )
    }
}

export default connect(mapStateToProps)(UserPortfolio);