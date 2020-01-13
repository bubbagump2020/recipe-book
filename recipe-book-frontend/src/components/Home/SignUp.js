import React from 'react'
import { ROOT_URL } from '../../Constants'
import { useSelector, useDispatch } from 'react-redux'
import { username, email, password } from '../../redux/actions/AuthActions'
import './styling/Homepage.css'

const SignUp = () => {

    const dispatch = useDispatch()
    const  { signup }  = useSelector(state => ({ signup: state.signup }))

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${ROOT_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: signup.username,
                email: signup.email,
                password: signup.password
            })
        })
        .then(response => response.json())
    }

    return(
        <div className="wrapper">
            <div className="header">Sign Up Now!</div>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="username">
                    <label>Username: </label>
                    <input
                        type="text"
                        onChange={e => dispatch(username(e.target.value))}
                        placeholder="Username"
                    />
                </div>
                <div className="email">
                    <label>Email: </label>
                    <input
                        type="email"
                        onChange={e => dispatch(email(e.target.value))}
                        placeholder="Email"    
                    />
                </div>
                <div className="password">
                    <label>Password: </label>
                    <input
                        type="password"
                        onChange={e => dispatch(password(e.target.value))}
                        placeholder="Password"
                    />
                </div>
                <button type="submit">Sign Up!</button>
            </form>
        </div>
    )
}

export default SignUp;