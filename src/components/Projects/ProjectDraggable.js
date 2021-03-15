import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class ProjectDraggable extends Component {A
  constructor(props) {
    super(props);
    this.dragElement = React.createRef();
  }

  render() {
    return (
      <div className={`ProjectsList__draggable ${this.props.show ? '' : 'ProjectsList__draggable--hidden'}`} ref={this.dragElement}>
        <div className="ProjectsList__draggable__counter">
          {this.props.count}
        </div>
      </div>
    )
  }
}

export default ProjectDraggable;
