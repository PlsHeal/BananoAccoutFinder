import React from 'react';
import logo from './logo.svg';
import { Account } from './features/counter/Account';
import { AccountInfo } from './features/AccountInfo';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route path='/' element={<Account />}/>
          <Route path='/about' element={<AccountInfo />}/>
        </Routes>
        <p>
          Welcome to Banano Account Generator!
        </p>
      </header>
    </div>
  );
}


export default App;
