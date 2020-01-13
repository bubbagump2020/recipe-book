import React, { useState } from 'react'
import { ROOT_URL } from '../../Constants'
import { Link } from 'react-router-dom'

export const NewRecipeForm = (props) => {

    const [recipe, setRecipe] = useState({
        name: '',
        ingredients: '',
        description: ''
    })

    const currentUser = props.match.params.username

    const handleSubmit = (e) => {
        e.preventDefault(e)
        const submitData = async (e) => {
            let result = await fetch(`${ROOT_URL}/users/${currentUser}/recipes`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'X-Requested-With': 'XmlHttpRequest',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    user_id: document.cookie,
                    name: recipe.name,
                    ingredients: recipe.ingredients,
                    description: recipe.description
                })
            })

            let data = await result.json()

        }
        submitData()
    }


    return(
        <div className="new-recipe-form-wrapper">
            {console.log(document.cookie)}
            <div>
                <form className="new-recipe-form" id="new-recipe" onSubmit={handleSubmit}>
                    <div>
                        <label>Recipe Name</label>
                        <input
                            type="text"
                            form="new-recipe"
                            placeholder="Recipe Name"
                            onChange={e => setRecipe({ ...recipe, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label>Ingredients</label>
                        <textarea
                            form="new-recipe"
                            rows="10" cols="50"
                            placeholder="Delicious Ingredients"
                            onChange={e => setRecipe({ ...recipe, ingredients: e.target.value })}
                        />
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea
                            form="new-recipe"
                            rows="10" cols="50"
                            placeholder="A Descriptive Description"
                            onChange={e => setRecipe({ ...recipe, description: e.target.value })}    
                        />
                    </div>
                    <button type="submit">Create!</button>
                </form>
            </div>
            <Link to={`/users/${currentUser}`}>Back to Home Page</Link>
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