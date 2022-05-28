import React, { Component } from 'react';
import './CriptoList.css';
import СurrencyСhart from '../../component/СurrencyСhart/СurrencyСhart';
import ButtonsCriptoCurrensy from '../../component/ButtonsCriptoCurrensy/ButtonsCriptoCurrensy';
import Converter from '../../component/Сonverter/Converter';

class CriptoList extends Component {

    render() {
        return (
            <section className='criptolist'>
                <div className='criptolist__container'>
                    <article className='criptolist__article'>
                        <ButtonsCriptoCurrensy />
                    </article>
                    <article className='criptolist__article'>
                        <СurrencyСhart />
                    </article>
                </div>
                <div className='criptolist__converter-container'>
                    <Converter />
                </div>
            </section>
        )
    }
}

export default CriptoList;