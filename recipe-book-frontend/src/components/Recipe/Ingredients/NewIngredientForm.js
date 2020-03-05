import React, {useState} from 'react'
import { ROOT_URL } from '../../../Constants'
import { Box, TextField, Button } from '@material-ui/core'

const NewIngredientForm = (props) => {

    const ingredientRecipeId = props.recipeId
    const ingredientRecipeName = props.recipeName
    const [ingredient, setIngredient] = useState({
        name: null,
        measurement: null
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${ROOT_URL}/recipes/${ingredientRecipeName}/ingredients`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'X-Requested-With': 'XmlHttpRequest',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                recipe_id: ingredientRecipeId,
                name: ingredient.name,
                measurement: ingredient.measurement
            })
        })
    }

    return(
        <Box>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <TextField
                        type="text"
                        margin="normal"
                        label="Ingredient Name"
                        variant="outlined"
                        onChange={e => setIngredient({ ...ingredient, name: e.target.value })}
                    />
                </div>
                <div>
                    <TextField
                        type="text"
                        margin="normal"
                        label="measurement"
                        variant="outlined"
                        onChange={e => setIngredient({ ...ingredient, measurement: e.target.value })}
                    />
                </div>
                <Button
                    type="submit"
                    variant="contained"    
                    color="primary"
                >   Add Ingredient
                </Button>
            </form>
        </Box>
    )
}

export default NewIngredientForm;