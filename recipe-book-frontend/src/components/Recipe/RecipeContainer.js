import React, {useState, useEffect } from 'react'
import clsx from 'clsx'
import { ROOT_URL } from '../../Constants'
import { Link } from 'react-router-dom'
import RecipeCard from './RecipeCard'
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Container,
    Button,    
    Drawer,
    List,
    ListItem,
    ListItemText,
    IconButton,
    useTheme,
    Divider
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import SignOut from '../Home/SignOut'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
        })
    },
    content: {
        display: 'flex',
        flexDirection: 'inherit',
        alignContent: 'center',
        flexWrap: 'wrap',
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
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end'
    },
    toolbar: theme.mixins.toolbar
}))
const RecipeContainer = (props) => {

    const classes = useStyles()
    const theme = useTheme()
    const user = props.location.state.user
    const user_id = localStorage.getItem('user_id')
    const [ open, setOpen ] = useState(false)
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

    const openDrawer = () => {
        setOpen(true)
    }

    const closeDrawer = () => {
        setOpen(false)
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
    
    return(
        <div>
            <AppBar className={clsx(classes.appBar, {[classes.appBarShift] : open})} position="sticky">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={openDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" className={classes.title}>
                        {user} Recipes
                    </Typography>
                    <Button color="inherit" href={`/users/${user}`}>
                        Home
                    </Button>
                    <SignOut />
                </Toolbar>
            </AppBar>
            <Drawer 
                variant="persistent"
                anchor="left"
                open={open}
                className={classes.drawer}
                classes={{paper: classes.drawerPaper}}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={closeDrawer}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
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
            <Container maxWidth="xl" className={classes.content}>
                <div className={classes.toolbar} />
                    {showRecipes()}
            </Container>
        </div>
    )
}

export default RecipeContainer