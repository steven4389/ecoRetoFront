import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login'
import Admin from './components/admin/Admin'
import Building from './components/admin/building/Building'

import 'bootstrap/dist/css/bootstrap.min.css';

//redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/building" component={Building} />
          </Switch>
        </Provider>
      </Router>
  );
}

export default App;
