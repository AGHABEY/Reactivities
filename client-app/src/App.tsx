import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ducks } from './demo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {ducks.map(duck=>
          <div key={duck.name}>
            <span>{duck.name}</span>

          <button onClick={()=> duck.makeSound(duck.name+' Salam')}>Make Sound</button>
          </div>
          )}
        <p>
          Edit <code>src/App.tsx</code> and save to reload. gedey gezey Selyani Selyani
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
