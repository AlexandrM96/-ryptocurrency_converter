import React, { Component } from 'react';
import './CurrencyItem.css';

class CurrencyItem extends Component {

    render() {
        const { name, img, quantity } = this.props;
        return (
            <div className='currency-item__container'>
                <div className='currency-item__container-item'>
                    <div className='currency-item__container-image'>
                        <img src={img} alt='Bitcoin' />
                    </div>
                    <div className='currency-item__container-text'>
                        {name}
                    </div>
                </div>
                <div className='currency-item__container-text'>
                    x {quantity}
                </div>
            </div>


        )
    }
}

export default CurrencyItem;