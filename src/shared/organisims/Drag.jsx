import React, { Component } from 'react';
import './Drag.css'

class Drag extends Component {
  constructor(props) {
    super(props);

    this.state = {
      diffX: 0,
      diffY: 0,
      dragging: false,
      styles: {}
    }

    this._dragStart = this._dragStart.bind(this);
    this._dragging = this._dragging.bind(this);
    this._dragEnd = this._dragEnd.bind(this);
  }

  _dragStart(e) {
    this.setState({
      diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
      diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
      dragging: true
    });
  }

  _dragging(e) {
    if(this.state.dragging) {
      const left = e.screenX - this.state.diffX;
      const top = e.screenY - this.state.diffY;
      this.setState({
        styles: {
          left: left,
          top: top
        }
      });
    }
  }    

  _dragEnd() {
      this.setState({
          dragging: false
      });
  }

  render() {
    return (
      <React.Fragment>
        <div 
          style={this.state.styles}
          className="dragContainer"
          onMouseDown={this._dragStart} 
          onMouseMove={this._dragging} 
          onMouseUp={this._dragEnd}
        >
          <div className="contentContainer">
            {this.props.content}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Drag
