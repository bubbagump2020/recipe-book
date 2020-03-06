import React, { useState } from 'react'
import { ROOT_URL } from '../../Constants'
import { Box, Container, Typography, AppBar, Toolbar, Button, makeStyles, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
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
        name: null,
        desc: null,
        instruct: null,
        value: 'beef'
    })

    const handleSubmit = () => {
        fetch(`${ROOT_URL}/users/${user}/recipes`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'X-Requested-With': 'XmlHttpRequest',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user_id: parseInt(localStorage.getItem('user_id')),
                name: recipe.name,
                description: recipe.desc,
                instruction: recipe.instruct,
                category: recipe.value
            })
        })
    }

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
                <form onSubmit={handleSubmit}>
                    <Typography variant="h6">
                        New Recipe
                    </Typography>
                    <div>
                        <FormControl>
                            <FormLabel component="legend">Category</FormLabel>
                            <RadioGroup
                                aria-label="category"
                                name="category1"
                                value={recipe.value}
                                onChange={e => setRecipe({ ...recipe, value: e.target.value})}
                            >
                                <FormControlLabel
                                    value="beef"
                                    control={<Radio />}
                                    label="Beef"
                                />
                                <FormControlLabel
                                    value="pork"
                                    control={<Radio />}
                                    label="Pork"
                                />
                                <FormControlLabel
                                    value="poultry"
                                    control={<Radio />}
                                    label="Poultry"
                                />
                                <FormControlLabel
                                    value="dessert"
                                    control={<Radio />}
                                    label="Dessert"
                                />
                                <FormControlLabel
                                    value="cookie"
                                    control={<Radio />}
                                    label="Cookies"
                                />
                                <FormControlLabel
                                    value="pastry"
                                    control={<Radio />}
                                    label="Pastry"
                                />
                                <FormControlLabel
                                    value="misc"
                                    control={<Radio />}
                                    label="Misc."
                                />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div>
                        <TextField
                            margin="normal"
                            type="text"
                            label="Name"
                            variant="outlined"
                            multiline
                            rows="1"
                            onChange={e => setRecipe({ ...recipe, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <TextField 
                            margin="normal"
                            label="Description"
                            variant="outlined"
                            multiline
                            rows="4"
                            onChange={e => setRecipe({ ...recipe, desc: e.target.value })}
                        />
                    </div>
                    <div>
                        <TextField 
                            margin="normal"
                            label="Instructions"
                            variant="outlined"
                            multiline
                            rows="4"
                            onChange={e => setRecipe({ ...recipe, instruct: e.target.value })}
                        />
                    </div>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        
                    >   Create Recipe
                    </Button>
                </form>
            </Container>
        </Box>
    )
}

export default NewRecipeForm