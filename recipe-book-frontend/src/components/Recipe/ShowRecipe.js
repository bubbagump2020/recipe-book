import React, {useState ,useEffect} from 'react'
import { ROOT_URL } from '../../Constants'
import IngredientCard from './Ingredients/IngredientCard'
import NewIngredientForm from './Ingredients/NewIngredientForm'

const ShowRecipe = (props) => {

    const [ingredients, setIngredients] = useState([])

    const recipeName = props.match.params.name

    useEffect(() => {
        fetch(`${ROOT_URL}/recipes/${recipeName}/ingredients`)
            .then(response => response.json())
            .then(result => setIngredients(result))
    }, [])

    const listIngredients = (ingredients) => {
        if(ingredients.length === 0){
            return(
                <div>
                    <h4>This Recipe has no ingredients</h4>
                </div>
            )
        } else {
            return ingredients.map(ingredient => {
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
            <h1>{recipeName}</h1>
            {listIngredients(ingredients)}
            <div>
                <h2>Add Ingredient</h2>
                <NewIngredientForm recipeName={recipeName}/>
            </div>
        </div>
    )
}

export default ShowRecipe;