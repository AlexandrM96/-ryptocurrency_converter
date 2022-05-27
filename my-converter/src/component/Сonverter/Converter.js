import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Converter.css';

const mapStateToProps = (state) => {
    return {
        coin: state.coin,
        usd: state.usd
    };
};

class Converter extends Component {

    state = {
        data: [],
        valueConverterOne: '1',
        flag: false
    }

    valueConverter = (event) => {
        this.setState({ valueConverterOne: event.target.value });
    };

    clickInputOne = () => {
        this.state.flag === true ?
            this.setState(this.state.flag === false ? { flag: true } : { flag: false })
            :
            this.setState(this.state.flag === true ? { flag: true } : { flag: false });
    }

    clickInputTwo = () => {
        this.state.flag === false ?
            this.setState(this.state.flag === true ? { flag: false } : { flag: true })
            :
            this.setState(this.state.flag === false ? { flag: false } : { flag: true });
    }

    // stateData = () => {
    //     this.setState(prevValue => ({
    //         data: this.props.coin
    //     }), () => {

    //     })
    // }
    render() {
        const coin = this.props.coin.symbol;
        const current = this.props.coin.market_data.current_price.usd;
        const res = this.props.coin.symbol === 'btc' ?
            this.props.usd.market_data.current_price.btc
            :
            this.props.usd.market_data.current_price.eth;
        return (
            <div className='converter'>
                <div className='converter__container'>
                    <div className='converter__block'>
                        <h5 className='converter__block-title'>{coin}</h5>
                        <div className='converter__block-input'>
                            <input
                                name="value"
                                value={this.state.flag === true ?
                                    this.state.valueConverterOne * res
                                    :
                                    this.state.valueConverterOne
                                }
                                onChange={this.valueConverter}
                                onClick={this.clickInputOne}
                                type='number' />
                            <p className='converter__block-input-paragrapf'>
                                {`1 ${coin} = ${current} usd`}
                            </p>
                        </div>
                    </div>
                    <div className='converter__block'>
                        <h5 className='converter__block-title'>USD</h5>
                        <div className='converter__block-input'>
                            <input
                                name="value"
                                value={this.state.flag === false ?
                                    this.state.valueConverterOne * current
                                    :
                                    this.state.valueConverterOne
                                }
                                onChange={this.valueConverter}
                                onClick={this.clickInputTwo}
                                type='number' />
                            <p className='converter__block-input-paragrapf'>
                                {`1 usd = ${res} ${coin}`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Converter);