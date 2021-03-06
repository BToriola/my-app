import React from 'react';
import {Link} from 'react-router-dom';
import account from '../assets/account.svg';

function MerchantNav() {
    return (
        <div className="merchantNav">
                <span className="merchantNav__account">
                    <img src={account} alt="account" />
                </span>
                <ul className="merchantNav__list">
                    <li className="merchantNav__item">
                        <Link className="merchantNav__link active" to="">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10.25" r="9.5" fill="#3EAAD9" fill-opacity="0.3"/>
                                <path d="M12.6873 7.96297C12.5735 7.64006 12.3657 7.3586 12.0905 7.1548C11.8154 6.95101 11.4856 6.83422 11.1436 6.81945H8.85651C8.40159 6.81945 7.96531 7.00016 7.64363 7.32184C7.32195 7.64352 7.14124 8.0798 7.14124 8.53472C7.14124 8.98964 7.32195 9.42593 7.64363 9.74761C7.96531 10.0693 8.40159 10.25 8.85651 10.25H11.1436C11.5985 10.25 12.0348 10.4307 12.3564 10.7524C12.6781 11.0741 12.8588 11.5104 12.8588 11.9653C12.8588 12.4202 12.6781 12.8565 12.3564 13.1782C12.0348 13.4998 11.5985 13.6806 11.1436 13.6806H8.85651C8.51446 13.6658 8.18464 13.549 7.90953 13.3452C7.63441 13.1414 7.42657 12.8599 7.31276 12.537" stroke="white" stroke-width="0.549769" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10 13.6806V15.3958M10 5.10417V6.81945V5.10417Z" stroke="white" stroke-width="0.549769" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Account &amp; Billing
                        </Link>
                    </li>
                    <li className="merchantNav__item">
                        <Link className="merchantNav__link" to="">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10.25" r="9.5" fill="#3EAAD9" fill-opacity="0.2"/>
                                <path d="M7.29167 8.08333L5.125 10.25L7.29167 12.4167" stroke="#055A8B" stroke-width="0.541667" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.7084 8.08333L14.875 10.25L12.7084 12.4167" stroke="#055A8B" stroke-width="0.541667" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11.0833 5.91667L8.91663 14.5833" stroke="#055A8B" stroke-width="0.541667" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Documentation</Link>
                    </li>
                    <li className="merchantNav__item">
                        <Link className="merchantNav__link" to="">
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="9.5" cy="9.5" r="9.5" fill="#3EAAD9" fill-opacity="0.2"/>
                                <path d="M6.2499 7.33332C6.84821 7.33332 7.33323 6.84829 7.33323 6.24998C7.33323 5.65167 6.84821 5.16665 6.2499 5.16665C5.65159 5.16665 5.16656 5.65167 5.16656 6.24998C5.16656 6.84829 5.65159 7.33332 6.2499 7.33332Z" stroke="#055A8B" stroke-width="0.54" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.7499 13.8333C13.3482 13.8333 13.8332 13.3483 13.8332 12.75C13.8332 12.1517 13.3482 11.6666 12.7499 11.6666C12.1516 11.6666 11.6666 12.1517 11.6666 12.75C11.6666 13.3483 12.1516 13.8333 12.7499 13.8333Z" stroke="#055A8B" stroke-width="0.54" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.95831 6.25H11.6666C11.954 6.25 12.2295 6.36414 12.4327 6.5673C12.6358 6.77047 12.75 7.04602 12.75 7.33333V11.6667" stroke="#055A8B" stroke-width="0.54" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.5833 7.875L8.95831 6.25L10.5833 4.625" stroke="#055A8B" stroke-width="0.54" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.0417 12.75H7.33333C7.04602 12.75 6.77047 12.6358 6.5673 12.4327C6.36414 12.2295 6.25 11.9539 6.25 11.6666V7.3333" stroke="#055A8B" stroke-width="0.54" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.41656 11.125L10.0416 12.75L8.41656 14.375" stroke="#055A8B" stroke-width="0.54" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            API</Link>
                    </li>
                </ul>
            </div>
    )
}

export default MerchantNav
