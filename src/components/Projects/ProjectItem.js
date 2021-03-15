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

  handleSelectToggle(e) {
    e.preventDefault();
    this.setState((state) => ({
      selected: !state.selected
    }), () => {
      this.props.onSelect.call(this, {id: this.props.item.id, selected: this.state.selected});
    });
  }

  render() {
    const {
      item
    } = this.props;

    return (
      <div className={`ProjectItem ${(this.state.selected === true) ? 'ProjectItem--selected' : ''}`} >
        <button className="ProjectItem__selector" onClick={(e) => this.handleSelectToggle(e)}></button>
        {(item && item.id) ? item.id : ``}
      </div>
    )
  }
}

export default ProjectItem;
