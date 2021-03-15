import './FolderItem.sass';
import React, { Component } from 'react';
import { Link } from "react-router-dom";

// import PropTypes from 'prop-types';

class FolderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dragTarget: false
    };
  }

  handleDragEnter() {
    this.setState({
      dragTarget: true
    });
  }

  handleDragLeave() {
    this.setState({
      dragTarget: false
    });
  }

  handleDragOver(e) {
    e.preventDefault();
  }

  handleDrop(e) {
    this.setState({
      dragTarget: false
    });
    this.props.handleDragRelease.call(this, {folderId: this.props.item.id});
  }

  render() {
    const {
      item,
      active
    } = this.props;

    return (
      <Link to={(item && item.id) ? `/folders/${item.id}` : `/`}
      className={`FolderItem FolderItem--${(active === true) ? 'active' : ''} ${this.state.dragTarget ? 'FolderItem--drag-target' : ''}`}
        onDragEnter={(e) => this.handleDragEnter(e)}
        onDragLeave={(e) => this.handleDragLeave(e)}
        onDragOver={(e) => this.handleDragOver(e)}
        onDrop={(e) => this.handleDrop(e)}
      >
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
