import './ProjectItem.sass';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {
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
      item,
      showFolder
    } = this.props;

    const folderElement = (showFolder ? (
      <div className="ProjectItem__folder">
        {`Folder ${item.folderId}`}
      </div>) : null
    );

    return (
      <div
          className={`ProjectItem ${(this.props.selected === true) ? 'ProjectItem--selected' : ''}`}
          draggable={true}
          onDragStart={(e) => this.handleDrag(e)}
        >
        <button className="ProjectItem__selector" onClick={(e) => this.handleSelectToggle(e)}></button>
        {(item && item.id) ? item.id : ``}
        { folderElement }
      </div>
    )
  }
}

ProjectItem.propTypes = {
  selected: PropTypes.bool,
  showFolder: PropTypes.bool,
  onSelect: PropTypes.func,
  onDrag: PropTypes.func
}

export default ProjectItem;
