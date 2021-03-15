import './index.sass';
import React, { Component } from 'react';
import FolderItem from './FolderItem.js';
// import PropTypes from 'prop-types';

class FoldersList extends Component {
  isItemActive(item) {
    const activeItemId = this.props.activeItemId;
    return (item && activeItemId && (item.id.toString() === activeItemId.toString()));
  }

  render() {
    const {
      folders,
      activeItemId
    } = this.props;

    return (
      <div className="FoldersList">
        <FolderItem key="0" active={!activeItemId} />
        { (folders && folders.length > 0)
          ? folders.map((item, i) => (
            <FolderItem key={i+1} item={item} active={this.isItemActive(item)} handleDragRelease={this.props.handleDragRelease} />
          )) : (
            null
          )
        }
      </div>
    )
  }
}

export default FoldersList;
