import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class ProjectDraggable extends Component {
  render() {
    const styles = {
      top: this.props.top + 'px',
      left: this.props.left + 'px'
    };

    console.log(styles);

    return (
      <div className="ProjectsList__draggable" style={styles}>
        <div className="ProjectsList__draggable__counter">
          {this.props.count}
        </div>
      </div>
    )
  }
}

export default ProjectDraggable;
