import React, {useState ,useEffect} from 'react'
import { ROOT_URL } from '../../Constants'
import IngredientCard from './Ingredients/IngredientCard'
import NewIngredientForm from './Ingredients/NewIngredientForm'
import IngredientContainer from './Ingredients/IngredientContainer'

const ShowRecipe = (props) => {

    const recipeName = props.match.params.name

    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        fetch(`${ROOT_URL}/recipes/${props.location.state.attributes.name}/ingredients`)
            .then(response => response.json())
            .then(result => setIngredients(result))
    }, [])

    return(
        <div>
            <h1>{recipeName}</h1>
            <div>
                <h2>Ingredients</h2>
                <IngredientContainer ingredients={ingredients}/>
            </div>
            <div>
                <h2>Add Ingredient</h2>
                <NewIngredientForm recipe={props.location.state.attributes}/>
            </div>
        </div>
    )
}

export default ShowRecipe;