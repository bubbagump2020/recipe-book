import React, {useState, useEffect } from 'react'
import { ROOT_URL } from '../../Constants'
import { Link } from 'react-router-dom'
import RecipeCard from './RecipeCard'

const RecipeContainer = (props) => {

    const user = props.match.params.username
    const url = props.match.url

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch(`${ROOT_URL}/users/${user}/recipes`)
            .then(response => response.json())
            .then(fetchedRecipes => setRecipes(fetchedRecipes))

    }, [])

    const showRecipes = (recipes) => {
        if(recipes.length === 0){
            return(
                <div>
                    <h3>You have no Recipes!</h3>
                    <div>
                        <Link to={`${url}/new`}>Click Here To Create Your First Recipe</Link>
                    </div>
                </div>
            )
        } else {
            return recipes.map(recipe => {
                return(
                    <div>
                        <RecipeCard attributes={recipe} />
                    </div>
                )
            })
        }
    }

    return(
        <div>
            <h1>Recipe Container</h1>
            <div>{showRecipes(recipes)}</div>
            <br>{console.log(recipes)}</br>
            <Link to={`/users/${user}`}>Back to Home Page</Link>
            <div></div>
            <Link to={`${url}/new`}>Create Recipe</Link>
        </div>
    )
}

export default RecipeContainer