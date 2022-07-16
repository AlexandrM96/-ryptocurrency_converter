import React, { Component } from 'react';
import './CriptoPortfel.css';
import UserPortfolio from '../../component/UserPortfolio/UserPortfolio';
import PortfolioDiagram from '../../component/PortfolioDiagram/PortfolioDiagram';
class CriptoPortfel extends Component {

    render() {
        return (
            <section className='CriptoPortfel'>
                <div className='CriptoPortfel__container'>
                    <article className='CriptoPortfel__article'>
                        <UserPortfolio />
                    </article>
                    <article className='CriptoPortfel__article'>
                        <PortfolioDiagram />
                    </article>
                </div>
            </section>
        )
    }
}

export default CriptoPortfel;