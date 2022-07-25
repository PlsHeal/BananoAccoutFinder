import { useState } from 'react'
import { selectValue } from "./counter/accountSlice";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import styles from './counter/Counter.module.css';

export function AccountInfo() {
    const value = useSelector(selectValue);
    const [balance, setBalance] = useState(0);

    async function getBalance() {
        const bananojs = require('@bananocoin/bananojs');
        bananojs.setBananodeApiUrl('https://kaliumapi.appditto.com/api');

        return bananojs.getAccountBalanceRaw(value).then((res) => setBalance(res));
    }

    getBalance();

    return (
        <div>
            <img src={`https://monkey.banano.cc/api/v1/monkey/${value}?format=png` } alt='logo' />
            <div className={styles.row}>
                <span className={styles.value}>{(!balance) ? 'Loading...' : `Raw Balance: ${balance}`}</span>
            </div>
            <div className={styles.row}>
                <Link to='/'>
                    <button
                    className={styles.asyncButton}
                    >
                        Back
                    </button>
                </Link>
            </div>
        </div>
    )
}