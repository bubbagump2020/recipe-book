import React from 'react'
import {
    Card,
    makeStyles,
    CardHeader,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        margin: 2
    }
}))

const IngredientCard = (props) => {
    const classes = useStyles()
    const ingredient = props.ing
    return(
        <Card className={classes.root} variant="outlined">
            <CardHeader title={ingredient.name} />
        </Card>
    )
}

export default IngredientCard;