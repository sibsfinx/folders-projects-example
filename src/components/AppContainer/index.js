//import './index.sass';
import React, { Component } from 'react';
import FoldersList from '../FoldersList';
import Projects from '../Projects';

import data from '../../data/SampleData.js';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectDragging: false,
      folders: data.folders,
      items: data.items.map((item) => {
        return {id: item.id, folderId: item.folderId, selected: false}
      })
    };
    this.projectsList = React.createRef();
  }

  getSelectedItems() {
    return this.state.items.filter((item) => {
      return (item.selected === true);
    });
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
    // save selected items to state here
    const itemId = args[1].id;
    const itemSelected = args[1].selected;
    const selected = this.state.items;
    let item = this.state.items.find((i) => {return i.id === itemId});
    item.selected = itemSelected;
    this.setState({
      items: selected,
    });
  }

  handleDragRelease(...args) {
    this.moveItemsToFolder(this.getSelectedItems(), args[0].folderId);
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
            items={this.state.items.filter((item) => {return item.folderId.toString() === this.props.match.params.id.toString()})}
            handleSelect={this.handleSelect.bind(this)}
          />
        </div>
      </div>
    )
  }
}

export default AppContainer;

