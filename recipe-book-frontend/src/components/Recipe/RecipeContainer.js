import React, {useState, useEffect } from 'react'
import { ROOT_URL } from '../../Constants'
import { Link } from 'react-router-dom'
import RecipeCard from './RecipeCard'
import { useSelector } from 'react-redux'

const RecipeContainer = (props) => {

    const { user } = useSelector(state => ({ user: state.loggedInUser }))

    
    const url = props.match.url

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch(`${ROOT_URL}/users/${user.user.id}/recipes`)
            .then(response => response.json())
            .then(fetchedRecipes => setRecipes(fetchedRecipes))

    }, [user])

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
                let recipe_id = props.match.params.recipe_id = recipe.id
                if(recipe.user_id === user.user.id){
                    return(
                        <div key={recipe.id} >
                            <Link to={`${url}/${recipe.name}`}>
                                <RecipeCard attributes={recipe} id={recipe_id} />
                            </Link>
                        </div>
                    )
                }
            })
        }
    }

    return(
        <div>
            <h1>Recipe Container</h1>
            {console.log(user.user)}
            <div>{showRecipes(recipes)}</div>
            <br>{console.log(recipes)}</br>
            <Link to={`/users/${user}`}>Home</Link>
            <div></div>
            <Link to={`${url}/new`}>Create Recipe</Link>
        </div>
    )
}

export default RecipeContainer