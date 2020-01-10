import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Homepage from './components/Home/Homepage'
import UserHomepage from './components/User/UserHomepage'
import RecipeContainer from './components/Recipe/RecipeContainer'
import { NewRecipeForm } from './components/Recipe/RecipeForms';

function App() {
  return (
    <Router>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/users/:username" component={UserHomepage}/>
        <Route exact path="/users/:username/recipes" component={RecipeContainer} />
        <Route exact path="/users/:username/recipes/new" component={NewRecipeForm} />
    </Router>
  );
}

export default App;