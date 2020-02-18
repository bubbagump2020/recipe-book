import React from 'react'
import './recipe_styling/recipe.css'
import Photo from './recipe_styling/pexels-photo-461198.jpeg'

const RecipeCard = (props) => {

    const recipe = props.attributes

    return(
        <div  className="recipe-card">
            <img src={Photo} alt="Tacos" style={{width: 100}}/>
            <div>
                <p id="name">{recipe.name}</p>
                <p id="desc">{recipe.description}</p>
            </div> 
        </div>
    )
}

export default RecipeCard;