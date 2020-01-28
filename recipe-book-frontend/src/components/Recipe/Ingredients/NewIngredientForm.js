import React, {useState} from 'react'
import { ROOT_URL } from '../../../Constants'

const NewIngredientForm = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${ROOT_URL}/recipes/${props.recipeName}/ingredients`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'X-Requested-With': 'XmlHttpRequest',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: '',
                measurement: ''
            })
        })
    }

    return(
        <div>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label>How Much?</label>
                    <input type="text" />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default NewIngredientForm;