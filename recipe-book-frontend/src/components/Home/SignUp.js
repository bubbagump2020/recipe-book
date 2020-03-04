import React, { useState } from 'react'
import { ROOT_URL } from '../../Constants'
import { Box, Grid, Button, TextField, Typography } from '@material-ui/core'

const SignUp = (props) => {

    const [success, setSuccess] = useState()
    const [confirmPass, setConfirmPass] = useState("")
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const handleSubmit = async () => {
        if (user.password === confirmPass){
            const response = await fetch(`${ROOT_URL}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    username: user.username,
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
            <form onSubmit={handleSubmit}>
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
                    >   Sign Up
                    </Button>
                </Grid>
            </form>
            {checkSignUpSuccess(success)}
        </Box>
    )
}

export default SignUp;