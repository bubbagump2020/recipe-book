import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Homepage from './components/Home/Homepage'
import UserHomepage from './components/User/UserHomepage'
import RecipeContainer from './components/Recipe/RecipeContainer'
import NewRecipeForm from './components/Recipe/RecipeForms';
import SignIn from './components/Home/SignIn';

function App() {
  return (
    <Router>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/sessions/new" component={SignIn} />
        <Route exact path="/users/:username" render={(props) => (<UserHomepage {...props} />)}/>
        <Route exact path="/users/:username/recipes" component={RecipeContainer} />
        <Route exact path="/users/:username/recipes/new" component={NewRecipeForm} />
    </Router>
  );
}

export default App;