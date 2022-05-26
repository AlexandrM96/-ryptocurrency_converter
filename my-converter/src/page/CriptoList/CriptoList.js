import React, { Component } from 'react';
import './CriptoList.css';
import СurrencyСhart from '../../component/СurrencyСhart/СurrencyСhart';

class CriptoList extends Component {



    render() {
        return (
            <section className='criptolist'>
                <article className='criptolist__article'>

                </article>
                <article className='criptolist__article'>
                    <СurrencyСhart />
                </article>
            </section>

        )
    }
}

export default CriptoList;