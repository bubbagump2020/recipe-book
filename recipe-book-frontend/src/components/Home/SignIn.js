import React, { useState } from 'react'
import { ROOT_URL } from '../../Constants'
import { Box, AppBar, Toolbar, Grid, Typography, Button, makeStyles, TextField, Container, Paper } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root:{
        flexGrow: 1,
    },
    form:{

    },
    toolBarTitle:{
        
        flexGrow: 1,
    }
}))

const SignIn = (props) => {
    const classes = useStyles()

    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    const [success, setSuccess] = useState()
    const loginProps = props

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const asyncHandleSubmit = async (e) => {
            const resultUser = await fetch(`${ROOT_URL}/login`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'X-Requested-With': 'XmlHttpRequest',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: user.username,
                    password: user.password
                })
            })
            const loggedInUser = await resultUser.json()
            console.log(loggedInUser)
            setSuccess(loggedInUser.success)
            document.cookie = loggedInUser.user.id
        }
        asyncHandleSubmit()
    }

    const checkSignInMessage = message => {
        if(message === true){
            loginProps.history.push(`/users/${user.username}`)
        } else if(message === false){
            return(
                <div>
                    <p>Username or Password was wrong, please try again</p>
                </div>
            )
        }
    }

    return(
        // <div className="sign-up-or-in-inner-wrapper">
        //     <form onSubmit={e => handleSubmit(e)}>
        //         <h2>Sign In</h2>
        //         <div>
        //             <label>Username</label>
        //             <input type="text" onChange={e => setUser({ ...user, username: e.target.value })} placeholder="Username" />
        //         </div>
        //         <div>
        //             <label>Password</label>
        //             <input type="password" onChange={e => setUser({ ...user, password: e.target.value })} placeholder="Password" />
        //         </div>
        //         <button type="submit">Sign In</button>
        //     </form>
        //     {checkSignInMessage(success)}
        // </div>
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
                <form onSubmit={e => handleSubmit(e)}>
                    <div>
                        <TextField type="text" label="Username" variant="filled" onChange={e => setUser({ ...user, username: e.target.value })} />
                        <TextField type="password" label="Password" variant="filled" onChange={e => setUser({ ...user, password: e.target.value })} />
                    </div>
                    <div>
                        <Button type="submit" variant="contained" color="primary">Sign In</Button>
                    </div>
                </form>
            </Container>
            {checkSignInMessage(success)}
        </Box>
    )
}

export default SignIn;