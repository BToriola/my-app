import React from 'react'
import logo from '../assets/logo.svg';
import account from '../assets/account.svg';
import caret from '../assets/caret.svg';

function MerchantTopNav() {
    return (
        <div className="merchantTopnav">
            <div className="merchantTopnav__logo">
                <img src={logo} alt="crivlar" />
                <h1>Crivlar</h1>
            </div>
            <div className="merchantTopnav__acount">
                <h2>Rivlon</h2>
                <span>
                    <img src={account} alt="account" />
                </span>
                <img src={caret} alt="drop arrow" />
            </div>
        </div>
    )
}

export default MerchantTopNav
