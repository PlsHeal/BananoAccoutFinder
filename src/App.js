import React from 'react';
import { Account } from './features/counter/Account';
import { AccountInfo } from './features/AccountInfo';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="Header">
        <Routes>
          <Route path='/' element={<Account />}/>
          <Route path='/about' element={<AccountInfo />}/>
        </Routes>
      </header>
    </div>
  );
}


export default App;
