import './index.sass';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import routes from '../../routes.js';
import AppNav from '../AppNav';
import AppContainer from '../AppContainer';

const App = () => {
  return (
    <div className="App">
      <AppNav />
        <Router>
          <Switch>
            <Route exact path={routes.root} component={AppContainer} />
            <Route path={`${routes.folders}/:id`} component={AppContainer} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
