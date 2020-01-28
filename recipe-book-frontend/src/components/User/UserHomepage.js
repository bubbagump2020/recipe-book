import React from 'react'
import {
    Link
} from 'react-router-dom'
import { useSelector } from 'react-redux'

const UserHomepage = (props) => {

    const { user } = useSelector(state => ({ user: state.loggedInUser }))

    const userUrl = props.match.url

    return(
        <div className="user-homepage-wrapper">
            <h1>Welcome {user.user.username}!</h1>
            <div>
                <Link to={{pathname: `${userUrl}/recipes`, state: { user: user }}}>
                    Recipe Book!
                </Link>
            </div>
            <div>
                <Link to={{pathname: `${userUrl}/recipes/new`, state: { user: user }}}>
                    Add a Recipe!
                </Link>
            </div>
        </div>
    )

}

export default UserHomepage;