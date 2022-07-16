
import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { ApiRequestBtcPortfolio } from '../../api_request/api.reqest';
import { ApiRequestEthPortfolio } from '../../api_request/api.reqest';

class Header extends Component {

    portfolio = () => {
        ApiRequestBtcPortfolio();
        ApiRequestEthPortfolio();
    }

    render() {
        return (
            <header className='header'>
                <div className='header__container'>
                    <h1 className='header__title'>Cryptocurrency converter</h1>
                    <nav className='header__navigation'>
                        <button className='header__navigation-button'>
                            <Link className='header__navigation-button-link' to='/'>Home</Link>
                        </button>
                        <button onClick={this.portfolio} className='header__navigation-button'>
                            <Link className='header__navigation-button-link' to='/portfel'>Portfolio</Link>
                        </button>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header