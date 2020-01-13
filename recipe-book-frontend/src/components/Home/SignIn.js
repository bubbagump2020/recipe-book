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
        const asyncHandleSubmit = async (e) => {
            const result = await fetch(`${ROOT_URL}/login`, {
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

            const loggedInUser = await result.json()
            console.log(loggedInUser)
            document.cookie = loggedInUser.id
            loginProps.history.push(`/users/${loggedInUser.username}`)

        }

        asyncHandleSubmit()

    }

    return(
        <div className="wrapper">
            <div className="header">Sign In Now!</div>
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