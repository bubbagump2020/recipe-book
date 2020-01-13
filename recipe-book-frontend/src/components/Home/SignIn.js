import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { username, password } from '../../redux/actions/AuthActions' 
import { ROOT_URL } from '../../Constants'
import './styling/Homepage.css'

const SignIn = (props) => {

    const dispatch = useDispatch()

    const { signup } = useSelector(state => ({ signup: state.signup}))


    const loginProps = props.props

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
                    username: signup.username,
                    password: signup.password
                })
            })

            const loggedInUser = await result.json()
            console.log(loggedInUser)
            document.cookie = loggedInUser.id
            loginProps.history.push(`/users/${loggedInUser.username}`)
            // loginProps.user_id = loggedInUser.id
            console.log(loginProps)

        }

        asyncHandleSubmit()

    }

    return(
        <div className="wrapper">
            {console.log(signup)}
            <div className="header">Sign In Now!</div>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="username">
                    <label>Username: </label>
                    <input
                        type="text"
                        placeholder="Username"
                        onChange={e => dispatch(username(e.target.value))}
                    />
                </div>
                <div className="password">
                    <label>Password: </label>
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={e => dispatch(password(e.target.value))}
                    />
                </div>
                <button type="submit">Sign In!</button>
            </form>
        </div>
    )
}

export default SignIn;