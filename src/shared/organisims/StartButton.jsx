import React, { Component } from 'react';

class StartButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    return (
      <button onClick={this.handleClick}> 
        { (this.props.isOn) ? 'Pause' : 'Go' }
      </button>
    );
  }
};

export default StartButton;