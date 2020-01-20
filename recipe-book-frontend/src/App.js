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
import { NewRecipeForm } from './components/Recipe/RecipeForms';
import ShowRecipe from './components/Recipe/ShowRecipe';

function App() {
  return (
    <Router>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/users/:username" render={(props) => (<UserHomepage {...props} />)}/>
        <Route exact path="/users/:username/recipes" component={RecipeContainer} />
        <Route exact path="/users/:username/recipes/new" component={NewRecipeForm} />
        <Route exact path="/users/:username/recipes/:name" component={ShowRecipe} />
    </Router>
  );
}

export default App;