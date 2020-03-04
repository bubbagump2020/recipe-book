import React, { useState } from 'react'
import {
    Link, Redirect
} from 'react-router-dom'
import {
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
import SignOut from '../Home/SignOut';

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

    return(
        <div className={classes.root}>
            <CssBaseline />
            <AppBar className={classes.appBar} >
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        Recip-Ease User Home
                    </Typography>
                    <SignOut />
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
        </div>
    )
}

export default UserHomepage;