import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login'

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
          </Switch>
        </Provider>
      </Router>
  );
}

export default App;
