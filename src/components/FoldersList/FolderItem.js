import './FolderItem.sass';
import React, { Component } from 'react';
import { Link } from "react-router-dom";

// import PropTypes from 'prop-types';

class FolderItem extends Component {
  render() {
    const {
      item,
      active
    } = this.props;

    return (
      <Link to={(item && item.id) ? `/folders/${item.id}` : `/`}
          className={`FolderItem FolderItem--${(active === true) ? 'active' : ''}`}>
        {(item && item.id)
          ? (
            `Folder ${item.id}`
          ) : (
            `All projects`
          )
        }
      </Link>
    )
  }
}

export default FolderItem;
