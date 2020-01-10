import React, { useState } from 'react'
import { ROOT_URL } from '../../Constants'
import './styling/Homepage.css'

const SignUp = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${ROOT_URL}/users`< {
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
    }


    return(
        <div className="wrapper">
            <div className="header">Sign Up Now!</div>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="username">
                    <label>Username: </label>
                    <input
                        type="text"
                        onChange={e => setUser({ ...user, username: e.target.value })}
                        placeholder="Username"
                    />
                </div>
                <div className="email">
                    <label>Email: </label>
                    <input
                        type="email"
                        onChange={e => setUser({ ...user, email: e.target.value })}
                        placeholder="Email"    
                    />
                </div>
                <div className="password">
                    <label>Password: </label>
                    <input
                        type="password"
                        onChange={e => setUser({ ...user, email: e.target.value })}
                        placeholder="Password"
                    />
                </div>
                <button type="submit">Sign Up!</button>
            </form>
        </div>
    )
}

export default SignUp;