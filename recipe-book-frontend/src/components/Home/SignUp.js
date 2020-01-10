import React from 'react'
import './styling/Homepage.css'

class SignUp extends React.Component{
    render(){
        return(
            <div className="wrapper">
                <div className="header">Sign Up Now!</div>
                <form>
                    <div className="username">
                        <label>Username: </label>
                        <input type="text" />
                    </div>
                    <div className="email">
                        <label>Email: </label>
                        <input type="email" />
                    </div>
                    <div className="password">
                        <label>Password: </label>
                        <input type="password" />
                    </div>
                    <button type="submit">Sign Up!</button>
                </form>
            </div>
        )
    }
}

export default SignUp;