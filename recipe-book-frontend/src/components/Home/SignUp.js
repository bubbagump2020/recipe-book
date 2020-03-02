import React, { useState } from 'react'
import { ROOT_URL } from '../../Constants'
import { Box, Grid, Button, TextField, Typography } from '@material-ui/core'

const SignUp = (props) => {

    const [success, setSuccess] = useState()
    const [confirmPass, setConfirmPass] = useState("")
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault() 
        if (user.password === confirmPass){
            console.log("Yep")
            const response = await fetch(`${ROOT_URL}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    username: user.username,
                    email: user.email,
                    password: user.password
                })
            })
            const data = await response.json()
            setSuccess(data.success)
        } else {
            return(
                <div>
                    <h5>Passwords Don't match</h5>
                </div>
            )
        }
    }

    const checkSignUpSuccess = (success) => {
        if (success === true){
            props.props.history.push(`/users/${user.username}`)
        } else if( success === false ) {
            return(
                <div>
                    <h1>User Not Created</h1>
                </div>
            )
        }
    }
    
    return(
        <Box>
            <Typography variant="h5">
                Sign Up
            </Typography>
            <Grid>
                <Grid item xs={12}>
                    <TextField
                        margin="normal"
                        type="text"
                        label="Username"
                        variant="filled"
                        onChange={e => setUser({ ...user, username: e.target.value })}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        margin="normal"
                        type="email"
                        label="Email"
                        variant="filled"
                        onChange={e => setUser({ ...user, email: e.target.value })}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        margin="normal"
                        type="password"
                        label="Password"
                        variant="filled"
                        onChange={e => setUser({ ...user, password: e.target.value })}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        margin="normal"
                        type="password"
                        label="Confirm Password"
                        variant="filled"
                        onChange={e => setConfirmPass(e.target.value)}
                    />
                </Grid>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={e => handleSubmit(e)}
                >   Sign Up
                </Button>
            </Grid>
            {checkSignUpSuccess(success)}
        </Box>
    )
}

export default SignUp;