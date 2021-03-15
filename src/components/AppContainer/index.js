//import './index.sass';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import AppNav from '../AppNav';
import FoldersList from '../FoldersList';
import Projects from '../Projects';
import ProjectDraggable from '../Projects/ProjectDraggable';

import data from '../../data/SampleData.js';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      projectDragging: false,
      dragPosition: []
    }
  }

  getProjects(items, folderId) {
    const folderItems = folderId ? (items.filter((item) => { return (item.folderId.toString() === folderId.toString())})) : items;
    return folderItems;
  }

  handleDragStart(...args) {
    this.setState({
      projectDragging: true,
      dragPosition: args
    })
  }

  render() {
    const dragIndicator = this.state.projectDragging ? <ProjectDraggable left={this.state.dragPosition[0]} top={this.state.dragPosition[1]} count={this.state.selected.length} /> : null;

    return (
      <div className="AppContainer">
        <div className="AppFilters">
          <FoldersList folders={data.folders} activeItemId={this.props.match.params.id}/>
        </div>
        <div className="AppContent">
          <Projects items={(() => this.getProjects(data.items, this.props.match.params.id))()} handleDragStart={this.handleDragStart.bind(this)} />
        </div>
        { dragIndicator }
      </div>
    )
  }
}

export default AppContainer;

