import React, { useState, useEffect } from 'react'
import IngredientCard from './IngredientCard'
import { ROOT_URL } from '../../../Constants'

const IngredientContainer = (props) => {

    const listIngredients = () => {
        if(props.ingredients.length === 0){
            return(
                <div>
                    <h4>This Recipe has no ingredients</h4>
                </div>
            )
        } else {
            return props.ingredients.map(ingredient => {
                return(
                    <div key={ingredient.id}>
                        <IngredientCard attributes={ingredient}/>
                    </div>
                )
            })
        }
    }

    return(
        <div>
            {console.log(props.ingredients)}
            {listIngredients()}
        </div>
    )
}

export default IngredientContainer;