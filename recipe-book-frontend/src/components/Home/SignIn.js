import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ROOT_URL } from '../../Constants'
import {
    Box,
    AppBar,
    Toolbar,
    Grid,
    Typography,
    Button,
    makeStyles,
    TextField,
    Container
} from '@material-ui/core'
import { password, confirmPassword, username, authenticatedUser } from '../../redux/actions/auth_actions'

const useStyles = makeStyles(theme => ({
    root:{
        flexGrow: 1,
    },
    form:{

    },
    toolBarTitle:{
        
        flexGrow: 1,
    },
}))

const SignIn = (props) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { authUser } = useSelector(state => ({ authUser: state.authentication.user }))
    const loginProps = props

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const asyncHandleSubmit = async () => {
            const resultUser = await fetch(`${ROOT_URL}/login`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'X-Requested-With': 'XmlHttpRequest',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: authUser.username,
                    password: authUser.password
                })
            })
            const loggedInUser = await resultUser.json()
            console.log(loggedInUser)
            sessionStorage.setItem('userToken', loggedInUser.token.session_id)
            localStorage.setItem('user_id', loggedInUser.user_id)
            dispatch(authenticatedUser(loggedInUser))
            loginProps.history.push(`/users/${loggedInUser.user}`)
        }
        asyncHandleSubmit()
    }

    const handlePasswordEntry = (e) => {
        dispatch(password(e.target.value))
        dispatch(confirmPassword(e.target.value))
    }

    const checkSignInMessage = message => {
        // if(message === true){
        //     loginProps.history.push(`/users/${user.username}`)
        // } else if(message === false){
        //     return(
        //         <div>
        //             <p>Username or Password was wrong, please try again</p>
        //         </div>
        //     )
        // }
    }

    return(
        <Box>
            <AppBar color="primary" position="sticky">
                <Toolbar>
                    <Typography variant="h5" className={classes.toolBarTitle}>
                        Recip-Ease Sign In
                    </Typography>
                    <Button href="/" color="inherit">Home</Button>
                </Toolbar>
            </AppBar>
            <Container>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid item xs={6}>
                            <TextField
                                margin="normal"
                                type="text"
                                label="Username"
                                variant="filled"
                                onChange={e => dispatch(username(e.target.value))}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                margin="normal"
                                type="password"
                                label="Password"
                                variant="filled"
                                onChange={handlePasswordEntry}
                            />
                        </Grid>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={e => handleSubmit(e)}
                        >   Sign In
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default SignIn;