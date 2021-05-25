import React, { Component } from 'react';
import StartButton from './StartButton';

const UpdateBackgroung = ({value}) => {
  value % 3 === 0 && value % 5 === 0
    ? document.body.style.backgroundColor = '#50bd47' /* Green */
    : (value % 3 === 0) 
    ? document.body.style.backgroundColor = '#912400' /* Red */
    : (value % 5 === 0) 
    ? document.body.style.backgroundColor = '#e5b11c' /* Yellow */
    : document.body.style.backgroundColor = '#2c3f85'; /* Default */
  return (
    <p className='counter'> {value} </p>
  );
};

class StartFizzBuzz extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 1, isOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const toogleOn = !this.state.isOn;
    this.setState(() => ({
      isOn: toogleOn,
    }));
    (this.state.isOn) ? this.pauseCount() : this.startCount();
  }

  pauseCount() {
    clearInterval(this.intervalCount);
  }

  startCount() {
    this.intervalCount = setInterval(() => {
      const newValue = this.state.value === 100 ? 1 : this.state.value + 1;
      this.setState(() => ({
        value: newValue,
        isOn: true,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalCount);
  }

  render() {
    return (
      <React.Fragment>
        <UpdateBackgroung value={this.state.value} />

        <StartButton 
          onClick={this.handleClick}
          isOn={this.state.isOn}
        />

      </React.Fragment>
    )
  };
}

export default StartFizzBuzz;
