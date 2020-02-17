import React, { useState } from 'react'
import { ROOT_URL } from '../../Constants'
import './styling/Homepage.css'

const SignUp = (props) => {

    const [success, setSuccess] = useState()
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault() 
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
        <div className="sign-up-or-in-inner-wrapper">
            
            <form onSubmit={e => handleSubmit(e)}>
                <h3>Sign Up</h3>
                <div>
                    <label>Username</label>
                    <input type="text" onChange={e => setUser({ ...user, username: e.target.value })} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" onChange={e => setUser({ ...user, email: e.target.value })} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" onChange={e => setUser({ ...user, password: e.target.value })} />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            {checkSignUpSuccess(success)}
        </div>
    )
}

export default SignUp;