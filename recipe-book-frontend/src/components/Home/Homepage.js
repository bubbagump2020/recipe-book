import React from 'react'
import './styling/Homepage.css'
import SignUp from './SignUp'
import SignIn from './SignIn'

const Homepage = (props) => {
    
    return(
        <div className="home-wrapper">
            <div className="header">Welcome to Your Online Recipe Book</div>
            <div className="sign-up-or-in">
                <SignUp props={props} />
            </div>
            <div className="sign-up-or-in">
                <SignIn props={props} />
            </div>
        </div>
    )
}

export default Homepage;