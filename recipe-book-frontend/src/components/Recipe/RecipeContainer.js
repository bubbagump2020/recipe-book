import React, {useState, useEffect } from 'react'
import { ROOT_URL } from '../../Constants'
import {
    Redirect,
    Link
} from 'react-router-dom'
import RecipeCard from './RecipeCard'
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    FormHelperText,
    Container,
    Button,    
    LinearProgress,
    Paper,
    Drawer,
    List,
    ListItem,
    ListItemText
} from '@material-ui/core'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    content: {
        display: 'flex',
        flexDirection: 'inherit',
        alignContent: 'center',
        // flexShrink
        flexGrow: 1,
        padding: theme.spacing(3)
    },
    title: {
        flexGrow: 1,
    },
    drawer:{
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar
}))
const RecipeContainer = (props) => {

    const classes = useStyles()
    const user = props.location.state.user
    const user_id = localStorage.getItem('user_id')
    const [ navigate, setNavigate ] = useState(false)
    const url = props.match.url
    const [allRecipes, setAllRecipes] = useState([])

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch(`${ROOT_URL}/users/${user}/recipes`)
            const data = await response.json()
            setAllRecipes(data)
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

    const showRecipes = () => {
        return allRecipes.filter(recipe => recipe.user_id === parseInt(user_id)).map(recipe => {
            return(
                <div key={recipe.id}>
                    <RecipeCard attributes={recipe} id={recipe.id}/>
                </div>
            )
        })
    }
    
    console.log( url )
    return(
        <div>
            <AppBar className={classes.appBar} position="sticky">
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
            
            <Drawer 
                variant="permanent"
                className={classes.drawer}
                classes={{paper: classes.drawerPaper}}
            >
                <div className={classes.toolbar}/>
                <List>
                    <ListItem button>
                        <ListItemText>
                            <Link to={{pathname: `${url}/new`}}>
                                Create Recipe
                            </Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <Container maxWidth="lg" className={classes.content}>
                <div className={classes.toolbar} />
                    {showRecipes()}
            </Container>
            {checkLogOutState()}
        </div>
    )
}

export default RecipeContainer