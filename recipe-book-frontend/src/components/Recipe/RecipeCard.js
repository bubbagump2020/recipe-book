import React from 'react'
import './recipe styling/recipe.css'

const RecipeCard = (props) => {

    const recipe = props.attributes

    return(
        <div>
            <div className="recipe-card">
                <p>{recipe.name}</p>
                <p>{recipe.description}</p>
            </div> 
        </div>
    )
}

export default RecipeCard;