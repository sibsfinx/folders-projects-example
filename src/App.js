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
import AppContent from './components/AppContent';
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
  render() {
    console.log(this.props);
    return (
      <div className="AppContainer">
        <FoldersList folders={data.folders} />
        <AppContent items={data.items} />
        {/*
          <AppContent items={getItems(this.props.items, this.props.match.params.id)} />
        */}
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
              <Route path="/folders" component={AppContainer} />
              <Route path="/folders/:id" component={AppContainer} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
