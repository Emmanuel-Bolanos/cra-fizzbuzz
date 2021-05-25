import React, { Component } from 'react';
import { DragOutlined } from '@ant-design/icons'
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

    this.dragStart = this.dragStart.bind(this);
    this.dragging = this.dragging.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
  }

  dragStart(e) {
    this.setState({
      diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
      diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
      dragging: true
    });
  }

  dragging(e) {
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

  dragEnd() {
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
        >
          <div
            onMouseDown={this.dragStart} 
            onMouseMove={this.dragging} 
            onMouseUp={this.dragEnd}
          >
            <DragOutlined />
          </div>
          <div>
            {this.props.content}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Drag
