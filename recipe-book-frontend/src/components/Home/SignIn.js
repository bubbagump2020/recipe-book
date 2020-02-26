import React, { useState } from 'react'
import { ROOT_URL } from '../../Constants'

const SignIn = (props) => {

    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    const [success, setSuccess] = useState()
    const loginProps = props.props

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
        <div className="sign-up-or-in-inner-wrapper">
            <form onSubmit={e => handleSubmit(e)}>
                <h2>Sign In</h2>
                <div>
                    <label>Username</label>
                    <input type="text" onChange={e => setUser({ ...user, username: e.target.value })} placeholder="Username" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" onChange={e => setUser({ ...user, password: e.target.value })} placeholder="Password" />
                </div>
                <button type="submit">Sign In</button>
            </form>
            {checkSignInMessage(success)}
        </div>
    )
}

export default SignIn;