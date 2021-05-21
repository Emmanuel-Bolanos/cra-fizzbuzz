import React from 'react';
import './FizzBuzz.css'

const HandleFB = ({value}) => {
  const bg = (value % 3 === 0 && value % 5 === 0) 
    ? document.body.style.backgroundColor = 'green'
    : (value % 3 === 0) 
    ? document.body.style.backgroundColor = 'red'
    : (value % 5 === 0) 
    ? document.body.style.backgroundColor = 'yellow'
    : document.body.style.backgroundColor = '	#99aab5';
  return (
    <p className={bg}> {value} </p>
  );
};

function startCount() {
  setInterval(() => {
    (!this.state.isPaused && this.handleIncrease());
  }, 1000)
}

class FizzBuzz extends React.Component {
  state = { value: 1, isPaused: false };

  componentDidMount() {
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  handleIncrease() {
    this.setState((state) => {
      return (state.value === 100) 
        ? { value: 0 } 
        : { value: state.value + 1 };
    });
  }

  handlePause() {
    this.setState((state) => {
      return (state.isPaused === true) 
      ? { isPaused: false } 
      : { isPaused: true };
    });
  }

  render() {
    const currentValue = this.state.value;
    return (
      <React.Fragment>
        <HandleFB value={currentValue}/>
        {this.state.value === 1 && <button onClick={startCount.bind(this)}> Count </button>}
        <button onClick={this.handlePause.bind(this)}> {this.state.isPaused ? 'Continue' : 'Pause'} </button>
      </React.Fragment>
    )
  };
}


export default FizzBuzz;
