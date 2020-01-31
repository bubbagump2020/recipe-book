import React, {useState ,useEffect} from 'react'
import { ROOT_URL } from '../../Constants'
import NewIngredientForm from './Ingredients/NewIngredientForm'
import IngredientContainer from './Ingredients/IngredientContainer'
import { Link } from 'react-router-dom'

const ShowRecipe = (props) => {

    const recipeName = props.match.params.name
    const user = props.location.state.user

    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        fetch(`${ROOT_URL}/recipes/${props.location.state.attributes.name}/ingredients`)
            .then(response => response.json())
            .then(result => setIngredients(result))
    }, [props.location.state.attributes.name])

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
            <Link to={`/users/${user}`}>Home</Link>
            <br></br>
            <Link to={{pathname: `/users/${user}/recipes`, state: { user: user }}}>Back to Recipes</Link>
        </div>
    )
}

export default ShowRecipe;