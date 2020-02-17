import React, {useState, useEffect } from 'react'
import { ROOT_URL } from '../../Constants'
import { Link } from 'react-router-dom'
import RecipeCard from './RecipeCard'
import './recipe styling/recipe_styling.css'

const RecipeContainer = (props) => {

    const user = props.location.state.user
    const user_id = parseInt(document.cookie)
    const url = props.match.url
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch(`${ROOT_URL}/users/${user}/recipes`)
            const data = await response.json()
            setRecipes(data)
        }
        fetchRecipes()
    }, [user])

    const showRecipes = (recipes) => {
        let userRecipes = []
        recipes.map(recipe => {
            if(recipe.user_id === user_id){
                userRecipes.push(recipe)
            }
        })
        if(userRecipes.length === 0){
            return(
                <div>
                    <h3>You have No Recipes!</h3>
                    <div>
                        <Link to={`${url}/new`}>Click Here To Create A Recipe</Link>
                    </div>
                </div>
            )
        } else {
            return(
                <div className="recipe-deck">
                    { recipes.map(recipe => {
                        if(recipe.user_id === user_id){
                            return(
                                <div key={recipe.id} className="recipe-deck">
                                    <Link to={{pathname: `${url}/${recipe.name}`, state: { attributes: recipe, user: user }}}>
                                        <RecipeCard attributes={recipe} id={recipe.id} />
                                    </Link>
                                </div>
                             )
                            }   
                    })}
                    <Link to={`${url}/new`}>Create Recipe</Link>
                </div>
            )
        }
    }

    return(
        <div className="recipe-container">
            <h1>Recipes</h1>
            <div className="recipe-deck">
                {showRecipes(recipes)}
            </div>
            <Link to={`/users/${user}`}>Home</Link>
        </div>
    )
}

export default RecipeContainer