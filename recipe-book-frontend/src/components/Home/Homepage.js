import React from 'react'
import './styling/Homepage.css'
import SignUp from './SignUp'
import SignIn from './SignIn'

const Homepage = (props) => {
    
    return(
        <div className="home-wrapper">
            <div className="sign-up-or-in-outer-wrapper">
                <SignIn props={props} />
            </div>
            <div className="sign-up-or-in-outer-wrapper">
                <SignUp props={props} />
            </div>
            <p>Kevin Bagnall 2020</p>
        </div>
    )
}

export default Homepage;