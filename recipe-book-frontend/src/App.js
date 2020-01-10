import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Homepage from './components/Home/Homepage'
import SignUp from './components/Home/SignUp'
import UserHomepage from './components/User/UserHomepage'

function App() {
  return (
    <Router>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/users/:username" component={UserHomepage}/>
    </Router>
  );
}

export default App;