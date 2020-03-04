import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { Redirect } from 'react-router-dom'

const SignOut = () => {
    const [ navigate, setNavigate ] = useState(false)

    const logOutClick = () => {
        sessionStorage.clear('userToken')
        setNavigate(true)
    }

    const checkLogOutState = () => {
        if (navigate){
            return <Redirect to="/" push={true} />
        }
    }

    return(
        <Button color="inherit" onClick={logOutClick}>
            Sign Out
            {checkLogOutState()}
        </Button>
    )
}

export default SignOut;