import React from 'react'
import IngredientContainer from './Ingredients/IngredientContainer'

const RecipeCard = (props) => {

    const recipe = props.attributes

    return(
        <div>
            <h1>{recipe.name}</h1>
        </div>
    )
}

export default RecipeCard;