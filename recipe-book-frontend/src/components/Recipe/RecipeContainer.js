import React from 'react'
import { Link } from 'react-router-dom'

const RecipeContainer = (props) => {

    const user = props.match.params.username

    return(
        <div>
            <h1>Recipe Container</h1>
            <div></div>
            <Link to={`/users/${user}`}>Back to Home Page</Link>
        </div>
    )
}

export default RecipeContainer