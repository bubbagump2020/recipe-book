import React, { useState } from 'react'
import { ROOT_URL } from '../../Constants'
import { Link } from 'react-router-dom'

export const NewRecipeForm = (props) => {

    const [recipe, setRecipe] = useState({
        name: '',
        ingredients: '',
        description: ''
    })

    const user = props.match.params.username

    const handleSubmit = (e) => {
        e.preventDefault(e)
        const submitData = async () => {
            let result = await fetch(`${ROOT_URL}/users/${user}/recipes`, {

            })

            let data = await result.json()

        }
    }


    return(
        <div className="new-recipe-form-wrapper">
            <div>
                <form className="new-recipe-form" id="new-recipe">
                    <div>
                        <label>Recipe Name</label>
                        <input type="text" form="new-recipe" placeholder="Recipe Name"/>
                    </div>
                    <div>
                        <label>Ingredients</label>
                        <textarea form="new-recipe" rows="10" cols="50" placeholder="Delicious Ingredients"/>
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea form="new-recipe" rows="10" cols="50" placeholder="A Descriptive Description"/>
                    </div>
                </form>
            </div>
            <Link to={`/users/${user}`}>Back to Home Page</Link>
        </div>
    )
}

export const UpdateRecipeForm = (props) => {

    const user = props.match.params.username

    return(
        <div>
            <h1>UpdateRecipeForm Component</h1>
            <Link to={`/users/${user}`}>Back to Home Page</Link>
        </div>
    )
}