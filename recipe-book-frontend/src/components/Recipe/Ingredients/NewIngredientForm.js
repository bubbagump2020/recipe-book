import React, {useState} from 'react'
import { ROOT_URL } from '../../../Constants'

const NewIngredientForm = (props) => {

    const [ingredient, setIngredient] = useState({
        name: '',
        measurement: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${ROOT_URL}/recipes/${props.recipe.name}/ingredients`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'X-Requested-With': 'XmlHttpRequest',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                recipe_id: props.recipe.id,
                name: ingredient.name,
                measurement: ingredient.measurement
            })
        })
    }

    return(
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>Name</label>
                    <input type="text" onChange={e => setIngredient({ ...ingredient, name: e.target.value })}/>
                </div>
                <div>
                    <label>How Much?</label>
                    <input type="text" onChange={e => setIngredient({ ...ingredient, measurement: e.target.value})}/>
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default NewIngredientForm;