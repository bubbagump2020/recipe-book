import React from 'react'
import {
    Link
} from 'react-router-dom'

const UserHomepage = (props) => {

    const user = props.match.params.username
    const userUrl = props.match.url

    return(
        <div className="user-homepage-wrapper">
            <p className="header">Welcome {user}!</p>
            <div className="side-menu-bar">
                <div>
                    <Link to={{pathname: `${userUrl}/recipes`, state: { user: user }}}>
                        Recipe Book
                    </Link>
                </div>
                <div>
                <Link to={{pathname: `${userUrl}/recipes/new`, state: { user: user }}}>
                    Add Recipe
                </Link>
                </div>
            </div>
            <div className="main-content-area">
                <div>
                    Hello!
                </div>
            </div>
            
        </div>
    )
}

export default UserHomepage;