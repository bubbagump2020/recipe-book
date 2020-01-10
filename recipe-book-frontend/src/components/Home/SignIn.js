import React, { useState } from 'react'
import { ROOT_URL } from '../../Constants'
import './styling/Homepage.css'

const SignIn = (props) => {

    const loginProps = props.props

    const [user, setUser] = useState({
        username: '',
        password: ''

    })

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${ROOT_URL}/login`, {
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
            .then(response => response.json())
            .then(loginInfo => loginProps.history.push(`/users/${loginInfo.username}`))
    }

    return(
        <div className="wrapper">
            {console.log(props)}
            <div className="header">Sign In Now!</div>
            <div className="header">NOT CURRENTLY WORKING</div>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="username">
                    <label>Username: </label>
                    <input
                        type="text"
                        placeholder="Username"
                        onChange={e => setUser({ ...user, username: e.target.value })}
                    />
                </div>
                <div className="password">
                    <label>Password: </label>
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={e => setUser({ ...user, password: e.target.value })}
                    />
                </div>
                <button type="submit">Sign In!</button>
            </form>
        </div>
    )
}

export default SignIn;