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
    IconButton,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails
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
    const [secExpanded, setSecExpanded ] = useState(false)
    const [ingredients, setIngredients] = useState([])

    const handleExpandClick = () => {
        setExpanded(!expanded)
        const ingFetch = async () => {
            const ingResponse = await fetch(`${ROOT_URL}/recipes/${recipe.name}/ingredients`)
            const ingData = await ingResponse.json()
            setIngredients(ingData)
        }
        if (expanded === false ){
            setIngredients([])
        }
        if (!expanded){
            ingFetch()
        }
    }

    const handleSecExpandClick = () => {
        setSecExpanded(!secExpanded)
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
            <ExpansionPanel>
                <ExpansionPanelSummary>
                    <Typography>
                        See More
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanel>
                    <ExpansionPanelSummary>
                        <Typography>
                            Ingredients
                        </Typography>
                    </ExpansionPanelSummary>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary>
                        <Typography>
                            New Ingredient
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <NewIngredientForm recipeId={recipe.id} recipeName={recipe.name} />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary>
                        <Typography>
                            Instructions
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            {recipe.instructions}
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </ExpansionPanel>
        </Card>
    )
}

export default RecipeCard;