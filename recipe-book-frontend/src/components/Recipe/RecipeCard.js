import React, { useState } from 'react'
import clsx from 'clsx'
import {
    Card,
    CardContent,
    Typography,
    makeStyles,
    CardHeader,
    CardMedia,
    CardActions,
    Collapse,
    IconButton
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import NewIngredientForm from './Ingredients/NewIngredientForm'
import IngredientContainer from './Ingredients/IngredientContainer'
import { ROOT_URL } from '../../Constants'

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 345,
        minHeight: 345,
        margin: 5
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    expand: {
        trandform: 'rotate(0deg)',
        marginRight: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: 'rotate(180)'
    }
}))

const RecipeCard = (props) => {
    const classes = useStyles()
    const recipe = props.attributes
    const [expanded, setExpanded] = useState(false)
    const [ingredients, setIngredients] = useState([])

    const handleExpandClick = () => {
        setExpanded(!expanded)
        // make someway to delete ingredients when the expansion is closed
        const ingFetch = async () => {
            const ingResponse = await fetch(`${ROOT_URL}/recipes/${recipe.name}/ingredients`)
            const ingData = await ingResponse.json()
            setIngredients(ingData)
        }
        ingFetch()
    }

    const returnDate = (recipeDate) => {
        const reciDate = new Date(recipeDate)
        const reciDay = reciDate.getDate()
        const reciMonth = reciDate.getMonth()
        const reciYear = reciDate.getFullYear()
        const fullDate = `${reciMonth + 1}/${reciDay}/${reciYear}`
        return fullDate
    }

    const showDates = (recipeCreateDate, recipeUpdateDate) => {
        const createDate = returnDate(recipeCreateDate)
        const updateDate = returnDate(recipeUpdateDate)
        if (createDate === updateDate){
            return createDate
        } else {
            return(
                <div>
                    <p>{`Created on ${createDate}`}</p>
                    <p>{`Updated on ${updateDate}`}</p>
                </div>
            )
        }
    }

    return(
        <Card className={classes.root} variant="outlined">
            <CardHeader title={recipe.name} subheader={`Created on ${showDates(recipe.created_at, recipe.updated_at)}`}/>
            {/* <CardMedia /> */}
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {recipe.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <div>
                    <IngredientContainer ing={ingredients} />
                </div>
            </Collapse>
        </Card>
    )
}

export default RecipeCard;