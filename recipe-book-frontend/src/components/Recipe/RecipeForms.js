import React from 'react'
import { Link } from 'react-router-dom'

export const NewRecipeForm = (props) => {

    const user = props.match.params.username

    return(
        <div>
            <h1>NewRecipeForm Component</h1>
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