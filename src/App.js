import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login'
import Building from './components/admin/building/Building'

import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './components/admin/Admin.jsx'
import Floor from './components/floor/Floor.jsx'
import User from './components/user/User'

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
            <Route exact path="/user" component={User} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/building/:id" component={Building} />
            <Route exact path="/floor" component={Floor} />
          </Switch>
        </Provider>
      </Router>
  );
}

export default App;
