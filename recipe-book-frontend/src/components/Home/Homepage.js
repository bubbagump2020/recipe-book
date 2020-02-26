import React from 'react'
import SignUp from './SignUp'
import SignIn from './SignIn'
import { Box, Grid, Paper, makeStyles, Typography } from '@material-ui/core'
import 'typeface-roboto'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper:{
        padding: theme.spacing(2),
        textAlign: 'center',
        alignItems: 'center',
        color: theme.palette.text.primary,
    }
}))

const Homepage = (props) => {
    const classes = useStyles()
    
    return(
        <div className={classes.root}>
            <Grid container spacing={3} >
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h3">
                            Recip-ease
                        </Typography>
                        <Typography varaint="subtitle1">
                            An online recipe book
                        </Typography>
                        <Typography variant="caption">
                            Created by Kevin Bagnall
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <SignUp />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <SignIn />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={0}>
                        <Typography variant="body1">
                            Tired of having all of those heavy cookbooks?
                            Worry no more! Welcome to Recip-ease, an online recipe book
                            where you can store all of your favorite recipes!
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>  
        </div>
    )
}

export default Homepage;