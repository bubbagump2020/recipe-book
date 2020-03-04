import React, { useState } from 'react'
import {
    Link, Redirect
} from 'react-router-dom'
import { Button,
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Drawer,
    CssBaseline,
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



const UserHomepage = (props) => {
    const classes = useStyles()
    const [ navigate, setNavigate ] = useState(false)
    const user = props.match.params.username
    const userUrl = props.match.url

    // could probably turn these two functions with into a component themselves, might have to if I want to log out from any where with out having to rewrite a bunch of code.

    const logoutClick = () => {
        sessionStorage.clear('userToken')
        setNavigate(true)
    }

    const checkLogOutState = () => {
        if (navigate) {
            return <Redirect to="/" push={true} />
        }
    }

    return(
        <div className={classes.root}>
            <CssBaseline />
            <AppBar className={classes.appBar} >
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        Recip-Ease User Home
                    </Typography>
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
                <div className={classes.toolbar} />
                <List>
                    <ListItem button>
                        <ListItemText>
                            <Link to={{pathname: `${userUrl}/recipes`, state: {user: user }}}>
                                Recipes
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText>
                            <Link to={{pathname: `${userUrl}/recipes/new`, state: {user: user }}}>
                                Create Recipe
                            </Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography>
                    Welcome {user}! Click "Recipes" to see all of your recipes or "Create Recipe" to add a new recipe!
                </Typography>
            </main>
            {checkLogOutState()}
        </div>
    )
}

export default UserHomepage;