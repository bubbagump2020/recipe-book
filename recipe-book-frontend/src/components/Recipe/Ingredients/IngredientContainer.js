import React from 'react'
import IngredientCard from './IngredientCard'
import { LinearProgress, CircularProgress } from '@material-ui/core'

const IngredientContainer = (props) => {

    while(props.ing.length === 0){
        return <CircularProgress />
    }

    const listIngredients = () => {
        const ingredients = props.ing
        return ingredients.map(ingredient => {
            return(
                <div key={ingredient.id}>
                    <IngredientCard ing={ingredient} />
                </div>
            )
        })
    }

    return(
        <div>
            {listIngredients()}
        </div>
    )
}

export default IngredientContainer;