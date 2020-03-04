import React, { useState } from 'react'
import { ROOT_URL } from '../../Constants'
import { Link } from 'react-router-dom'
import { Box, Container, Typography, AppBar, Toolbar, Button, makeStyles, TextField } from '@material-ui/core'
import SignOut from '../Home/SignOut'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    title: {
        flexGrow: 1,
    },
    form: {
        display: 'flex',
        minWidth: 345,
    }
}))

const NewRecipeForm = (props) => {
    const classes = useStyles()
    const user = props.match.params.username
    const [ recipe, setRecipe ] = useState({
        name: '',
        desc: ''
    })

    const handleSubmit = (e) => {
        fetch(`${ROOT_URL}/users/${user}/recipes`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'X-Requested-With': 'XmlHttpRequest',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user_id: document.cookie,
                name: recipe.name,
                description: recipe.desc
            })
        })
    }

    console.log(props)

    return(
        <Box>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        {`${user}'s New Recipe`}
                    </Typography>
                    <Button color="inherit" href={`/users/${user}`}>
                        Home
                    </Button>
                    <SignOut />
                </Toolbar>
            </AppBar>
            <Container>
                <form >
                    <Typography variant="h6">
                        New Recipe
                    </Typography>
                    <div>
                        <TextField
                            margin="normal"
                            type="text"
                            label="Recipe Name"
                            variant="outlined"
                            multiline
                            rows="1"
                        />
                    </div>
                    <div>
                        <TextField 
                            margin="normal"
                            label="Recipe Description"
                            variant="outlined"
                            multiline
                            rows="4"
                        />
                    </div>
                    <div>
                        {/* Recipe Instructions Component */}
                    </div>
                </form>
            </Container>
        </Box>
    )
}

export default NewRecipeForm