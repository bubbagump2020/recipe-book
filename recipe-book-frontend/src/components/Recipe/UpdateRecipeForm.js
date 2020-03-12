import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, TextField } from '@material-ui/core'
import { recipeName, recipeDesc, recipeInst, reciValue } from '../../redux/actions/reciActions'

const UpdateRecipeForm = (props) => {

    const dispatch = useDispatch()

    const instructions = props.recipe.instruction

    return(
        <form>
            <TextField
                style={{ width: "100%"}}
                margin="normal"
                defaultValue={`${instructions}`}
                variant="outlined"
                multiline
                rows="10"
                onChange={e => dispatch(recipeInst(e.target.value ))}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
            >
                Update
            </Button>
        </form>
    )
}

export default UpdateRecipeForm