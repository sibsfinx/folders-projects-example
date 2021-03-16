//import './index.sass';
import React, { Component } from 'react';
import FoldersList from '../FoldersList';
import Projects from '../Projects';

import getSelectedItems from '../../utils/getSelectedItems';

const getData = (callback) => {
  fetch('/data.json')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      callback.call(this, json);
    });
}

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectDragging: false,
      folders: [],
      items: []
    };
    this.projectsList = React.createRef();
  }


  componentDidMount() {
    getData(this.updateData.bind(this));
  }

  updateData(data) {
    this.setState({
      folders: data.folders,
      items: data.items
    })
  }

  getFolderItems() {
    if (this.props.match.params && this.props.match.params.id) {
      const items = this.state.items.filter((item) => {
        return item.folderId.toString() === this.props.match.params.id.toString()
      })
      return items;
    } else {
      return this.state.items;
    }
  }

  unselectItems() {
    const unselected = this.state.items;
    unselected.forEach((item) => {
      item.selected = false;
    });
    this.setState({
      items: unselected
    });
  }

  handleSelect(...args) {
    const itemId = args[0].id;
    const itemSelected = args[0].selected;
    const selected = this.state.items;
    let item = this.state.items.find((i) => {return i.id === itemId});
    item.selected = itemSelected;
    this.setState({
      items: selected,
    });
  }

  handleDragRelease(...args) {
    this.moveItemsToFolder(getSelectedItems(this.state.items), args[0].folderId);
  }

  moveItemsToFolder(items, folderId) {
    // API call with optimistic update
    // re-sort items
    const selected = items.map((item) => item.id);
    const moved = this.state.items;
    moved
      .filter((item) => {
        return selected.indexOf(item.id) >= 0;
      })
      .forEach((item) => {
        item.folderId = folderId;
    });
    this.setState({
      items: moved
    }, this.unselectItems());
  }

  render() {
    const folderItems = this.getFolderItems();

    return (
      <div className="AppContainer">
        <div className="AppFilters">
          <FoldersList
            folders={this.state.folders}
            activeItemId={this.props.match.params.id}
            handleDragRelease={this.handleDragRelease.bind(this)}
          />
        </div>
        <div className="AppContent">
          <Projects
            ref={this.projectsList}
            items={folderItems}
            activeFolderId={this.props.match.params.id}
            handleSelect={this.handleSelect.bind(this)}
          />
        </div>
      </div>
    )
  }
}

export default AppContainer;

