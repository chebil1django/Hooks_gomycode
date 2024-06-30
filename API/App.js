
import React from 'react';
import './App.css';
import UserList from './UserList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Liste des utilusateurs via Axios </h1>
      </header>
      <main>
        <UserList />
      </main>
    </div>
  );
}

export default App;
