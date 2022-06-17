import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAccount,
  selectValue,
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
        <span className={styles.value}>{account}</span>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set account"
          value={bananoAccount}
          onChange={(e) => setBananoAccount(e.target.value)}
        />
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(getAccount(bananoAccount))}
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
