import React from 'react';

const UpdateValue = ({value}) => {
  const bg = (value % 3 === 0 && value % 5 === 0) 
    ? document.body.style.backgroundColor = '#50bd47' /* Green */
    : (value % 3 === 0) 
    ? document.body.style.backgroundColor = '#912400' /* Red */
    : (value % 5 === 0) 
    ? document.body.style.backgroundColor = '#e5b11c' /* Yellow */
    : document.body.style.backgroundColor = '#2c3f85'; /* Default */
  return (
    <p className={bg}> {value} </p>
  );
};

class StartFizzBuzz extends React.Component {
  state = { value: 1, isPaused: false };
  handleIncrease = this.handleIncrease.bind(this);
  handlePause = this.handlePause.bind(this);

  handleIncrease() {
    setInterval(() => {
      !this.state.isPaused && this.setState((state) => {
        return (state.value === 100) 
          ? { value: 1 }
          : { value: state.value + 1 };
      });
    }, 1000);
  }

  handlePause() {
    this.setState((state) => ({
      isPaused : !state.isPaused
    }));
  }

  render() {
    const currentValue = this.state.value;

    return (
      <React.Fragment>
        <UpdateValue value={currentValue} />
        
        {this.state.value === 1 && <button onClick={this.handleIncrease}> Start </button>}

        <button onClick={this.handlePause}> 
          {this.state.isPaused ? 'Continue' : 'Pause'} 
        </button>
      </React.Fragment>
    )
  };
}


export default StartFizzBuzz;
