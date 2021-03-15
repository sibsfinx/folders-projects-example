import './ProjectItem.sass';
import React, { Component } from 'react';

// import PropTypes from 'prop-types';

class ProjectItem extends Component {
  constructor(props) {
    super(props);
  }

  handleSelectToggle(e) {
    e.preventDefault();
    this.props.onSelect.call(this, {id: this.props.item.id, selected: !this.props.selected});
  }

  handleDrag(e) {
    this.props.onSelect.call(this, {id: this.props.item.id, selected: true});
    this.props.onDrag.call(this, e);
  }

  render() {
    const {
      item
    } = this.props;

    return (
      <div
          className={`ProjectItem ${(this.props.selected === true) ? 'ProjectItem--selected' : ''}`}
          draggable={true}
          onDragStart={(e) => this.handleDrag(e)}
        >
        <button className="ProjectItem__selector" onClick={(e) => this.handleSelectToggle(e)}></button>
        {(item && item.id) ? item.id : ``}
      </div>
    )
  }
}

export default ProjectItem;
