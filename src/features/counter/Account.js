import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAccount,
  selectValue
} from './accountSlice';
import { Link } from 'react-router-dom';
import styles from './Counter.module.css';

export function Account() {
  const account = useSelector(selectValue);
  const dispatch = useDispatch();
  const [bananoAccount, setBananoAccount] = useState('');

  return (
    <div>
      <div className={styles.row}>
        <input
            className={styles.textbox}
            aria-label="Set account"
            value={bananoAccount}
            placeholder='Paste here your account'
            onChange={(e) => {
              if(e.target.value.length < 20) {
                return;
              }
              setBananoAccount(e.target.value)
            }}
          />
      </div>
      <div className={styles.row}>
        <div className={styles.container}>
          <img src={`https://monkey.banano.cc/api/v1/monkey/${account}?format=png`} alt='logo' />
          <span className={styles.value}>{account}</span>
        </div>
      </div>
      <div className={styles.row}>
        <button
          className={styles.asyncButton}
          onClick={() => {
            dispatch(getAccount(bananoAccount));
          }}
        >
          Generate account
        </button>
        <Link to='/about'>
          <button
            className={styles.asyncButton}
          >
            Get Account Balance
          </button>
        </Link>
      </div>
    </div>
  );
}
