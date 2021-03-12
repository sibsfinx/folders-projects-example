import './ProjectItem.sass';
import React, { Component } from 'react';
import { Link } from "react-router-dom";

// import PropTypes from 'prop-types';

class ProjectItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
  }

  render() {
    const {
      item,
      active
    } = this.props;

    return (
      <div className={`ProjectItem ProjectItem--${(this.state.selected === true) ? 'selected' : ''}`}>
        {(item && item.id) ? item.id : ``}
      </div>
    )
  }
}

export default ProjectItem;
