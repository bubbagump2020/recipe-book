import React from 'react'
import {
    Card,
    makeStyles,
    CardHeader,
    IconButton,
} from '@material-ui/core'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'
import { ROOT_URL } from '../../../Constants'
import { useDispatch } from 'react-redux'
import { allIng } from '../../../redux/actions/ingActions'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        // flexDirection: 'column',
    },
    deleteCard: {
        marginLeft: 'auto',
        marginBottom: 'auto'
    }
}))

const IngredientCard = (props) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const ingredient = props.ing
    const recipe = props.recipe

    const handleDeleteClick = (e) => {
        e.preventDefault()
        const deleteFetch = async () => {
            const response = await fetch(`${ROOT_URL}/ingredients/${ingredient.name}`,{
                method: 'DELETE',
                credentials: 'include'
            })
            const reFetchResponse = await fetch(`${ROOT_URL}/recipes/${recipe.name}/ingredients`)
            const reFetchData = await reFetchResponse.json()
            dispatch(allIng(reFetchData))
        }
        deleteFetch()
    }

    console.log(props)

    return(
        <Card className={classes.root} variant="outlined">
            <CardHeader title={ingredient.name} />
            <IconButton
                className={classes.deleteCard}
                onClick={handleDeleteClick}
            >
                <CloseOutlinedIcon className={classes.deleteCard} />
            </IconButton>
        </Card>
    )
}

export default IngredientCard;