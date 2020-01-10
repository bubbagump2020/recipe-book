import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Homepage from './components/Home/Homepage'
import SignUp from './components/Home/SignUp'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/users">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;