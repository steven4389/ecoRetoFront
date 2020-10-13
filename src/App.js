import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login'
import Admin from './components/admin/Admin.jsx'
import Floor from './components/floor/Floor.jsx'

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
            <Route exact path="/floor" component={Floor} />
          </Switch>
        </Provider>
      </Router>
  );
}

export default App;
