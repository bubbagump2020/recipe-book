import React from 'react'
import { Card, CardContent, Typography, makeStyles, CardHeader, CardMedia } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 345,
        minHeight: 345,
        margin: 5
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    }
}))

const RecipeCard = (props) => {
    const classes = useStyles()

    const recipe = props.attributes
    console.log(recipe)
    return(
        <Card className={classes.root} variant="outlined">
            <CardHeader title={recipe.name} subheader={`Created on ${recipe.created_at}`}/>
            {/* <CardMedia /> */}
            <CardContent>
                <Typography>
                    {recipe.description}
                </Typography>
            </CardContent>
            <CardContent>

            </CardContent>
            <CardContent>
                {recipe.instruction}
            </CardContent>
            {/*CardContent: Ingredients*/}
            {/*CardContent: Add in another column for instructions in the ruby backend. This part is going to be collapsible*/}
        </Card>
    )
}

export default RecipeCard;
/* <CardContent>
    <Typography>
        {recipe.name}
    </Typography>
</CardContent> */