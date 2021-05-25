import React from 'react';
import Drag from './shared/organisims/Drag'
import StartFizzBuzz from './shared/organisims/FizzBuzz'
import './App.css';

const FizzBuzz = () => {
  return (
    <div className="App">
      <h1> FizzBuzz  </h1>
      <StartFizzBuzz />
    </div>
  );
}

function App() {
  return (
    <React.Fragment>
      <Drag
        content={<FizzBuzz />}
      />
    </React.Fragment>
  );
}

export default App;
