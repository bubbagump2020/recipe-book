import React from 'react'

const RecipeCard = (props) => {

    const recipe = props.attributes

    return(
        <div>
            <h1>{recipe.name}</h1>
        </div>
    )
}

export default RecipeCard;