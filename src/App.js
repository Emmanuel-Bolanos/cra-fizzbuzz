import React from 'react';
import StartFizzBuzz from './shared/organisims/FizzBuzz'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> FizzBuzz  </h1>
      <StartFizzBuzz 
        limit={100}
      />
    </div>
  );
}

export default App;
