import './index.sass';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AppNav from '../AppNav';
import AppContainer from '../AppContainer';

const App = () => {
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
