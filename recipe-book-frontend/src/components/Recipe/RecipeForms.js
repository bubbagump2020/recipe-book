import React, { useState } from 'react'
import { ROOT_URL } from '../../Constants'
import { Link } from 'react-router-dom'

export const NewRecipeForm = (props) => {

    const user = props.match.params.username
    const [ recipe, setRecipe ] = useState({
        name: '',
        desc: ''
    })

    const handleSubmit = (e) => {
        fetch(`${ROOT_URL}/users/${user}/recipes`, {
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
                description: recipe.desc
            })
        })
    }

    return(
        <div className="new-recipe-form-wrapper">
            <div className="header">New Recipe Form</div>
            <div>
                <form className="new-recipe-form" id="new-recipe" onSubmit={handleSubmit}>
                    <div>
                        <label>Recipe Name</label>
                        <input
                            type="text"
                            form="new-recipe"
                            placeholder="Recipe Name"
                            onChange={e => setRecipe({...recipe, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea
                            form="new-recipe"
                            rows="10" cols="50"
                            placeholder="A Descriptive Description"
                            onChange={e => setRecipe({ ...recipe, desc: e.target.value })}    
                        />
                    </div>
                    <button type="submit">Create!</button>
                </form>
            </div>
            <Link to={`/users/${user}`}>Home</Link>
        </div>
    )
}

export const UpdateRecipeForm = (props) => {

    const user = props.match.params.username

    return(
        <div>
            <h1>UpdateRecipeForm Component</h1>
            <Link to={`/users/${user}`}>Home</Link>
        </div>
    )
}