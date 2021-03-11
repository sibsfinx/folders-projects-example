import './index.sass';
import React, { Component } from 'react';
import FolderItem from './FolderItem.js';
// import PropTypes from 'prop-types';

class FoldersList extends Component {
  render() {
    const {
      folders,
      activeItemId
    } = this.props;

    console.log(this.props);

    return (
      <div className="FoldersList">
        { (folders && folders.length > 0)
          ? folders.map((item, i) => (
            <FolderItem key={i} item={item} active={item.id === activeItemId}/>
          )) : (
            <div>No folders</div>
          )
        }
      </div>
    )
  }
}

export default FoldersList;
