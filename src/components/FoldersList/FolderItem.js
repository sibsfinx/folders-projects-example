import './FolderItem.sass';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from "react-router-dom";
import routes from '../../routes.js';

class FolderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dragTarget: this.props.dragTarget
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

  getClassName() {
    return `FolderItem FolderItem--${(this.props.active === true) ? 'active' : ''} ${this.state.dragTarget ? 'FolderItem--drag-target' : ''}`
  }

  render() {
    const {
      item
    } = this.props;

    return (
      <Link to={(item && item.id) ? `${routes.folders}/${item.id}` : routes.root}
        className={this.getClassName()}
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

FolderItem.propTypes = {
  item: PropTypes.object,
  active: PropTypes.bool,
  dragTarget: PropTypes.bool,
  handleDragRelease: PropTypes.func
}

export default FolderItem;
