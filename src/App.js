import './App.sass';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import AppNav from './components/AppNav';
import FoldersList from './components/FoldersList';
import Projects from './components/Projects';
import data from './data/SampleData.js';

const getItems = (items, activeItemId) => {
  if (activeItemId) {
    return items.filter((item) => {
      return item.id === activeItemId;
    })
  } else {
    return data.items;
  }
}

class AppContainer extends Component {
  getProjects(items, folderId) {
    const folderItems = folderId ? (items.filter((item) => { return (item.folderId.toString() === folderId.toString())})) : items;
    return folderItems;
  }

  render() {
    return (
      <div className="AppContainer">
        <div className="AppFilters">
          <FoldersList folders={data.folders} activeItemId={this.props.match.params.id}/>
        </div>
        <div className="AppContent">
          <Projects items={(() => this.getProjects(data.items, this.props.match.params.id))()} />
        </div>
      </div>
    )
  }
}

const App = () => {
  console.log(data);
  return (
    <div className="App">
      <AppNav />
        <Router>
          <Switch>
            <Route exact path="/" component={AppContainer} />
            <Route path="/folders/:id" component={AppContainer} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
