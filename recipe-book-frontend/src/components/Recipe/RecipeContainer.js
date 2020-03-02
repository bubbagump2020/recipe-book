import React, {useState, useEffect } from 'react'
import { ROOT_URL } from '../../Constants'
import { Redirect } from 'react-router-dom'
import RecipeCard from './RecipeCard'
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    FormHelperText,
    Button    
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        display: FormHelperText,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
    title: {
        flexGrow: 1,
    }
}))

const RecipeContainer = (props) => {

    const classes = useStyles()
    const user = props.location.state.user
    const user_id = localStorage.getItem('user_id')
    const [ navigate, setNavigate ] = useState(false)
    const url = props.match.url
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch(`${ROOT_URL}/users/${user}/recipes`)
            const data = await response.json()
            setRecipes(data)
        }
        fetchRecipes()
    }, [user])

    const logoutClick = () => {
        sessionStorage.clear('userToken')
        setNavigate(true)
    }

    const checkLogOutState = () => {
        if (navigate) {
            return <Redirect to="/" push={true} />
        }
    }

    const showRecipes = (recipes) => {
        let userRecipes = []
        recipes.map(recipe => {
            if(recipe.user_id === user_id){
                userRecipes.push(recipe)
            }
        })
        if(userRecipes.length === 0){
            console.log("Loading")
            // return(
            //     <div>
            //         <h3>You have No Recipes!</h3>
            //         <div>
            //             <Link to={`${url}/new`}>Click Here To Create A Recipe</Link>
            //             <Link to={`/users/${user}`}>Home</Link>
            //         </div>
            //     </div>
            // )
        } else {
            console.log("Recipes?")
            // return(
            //     <div className="recipe-deck">
            //         { recipes.map(recipe => {
            //             if(recipe.user_id === user_id){
            //                 return(
            //                     <div key={recipe.id} className="recipe-card-wrapper">
            //                         <Link to={{pathname: `/recipes/${recipe.name}`, state: { attributes: recipe, user: user }}}>
            //                             <RecipeCard attributes={recipe} id={recipe.id} />
            //                         </Link>
            //                     </div>
            //                  )
            //                 }   
            //         })}
            //     </div>
            // )
        }
    }
    return(
        <Box>
            <AppBar>
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        {user} Recipes
                    </Typography>
                    <Button color="inherit" href={`/users/${user}`}>
                        Home
                    </Button>
                    <Button color="inherit" onClick={logoutClick}>
                        Sign Out
                    </Button>
                </Toolbar>
            </AppBar>
            {showRecipes(recipes)}
            {checkLogOutState()}
        </Box>
    )
}

export default RecipeContainer