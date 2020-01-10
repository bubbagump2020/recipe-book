import React from 'react'
import './styling/Homepage.css'
import SignUp from './SignUp'
import SignIn from './SignIn'

class Homepage extends React.Component{
    render(){
        return(
            <div className="home-wrapper">
                <div className="header">Welcome to Your Online Recipe Book</div>
                <div className="sign-up-or-in">
                    <SignUp />
                </div>
                <div className="sign-up-or-in">
                    <SignIn />
                </div>
            </div>
        )
    }
}

export default Homepage;