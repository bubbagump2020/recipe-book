import React, { useState, useEffect } from 'react'
import {
    Link
} from 'react-router-dom'
import { ROOT_URL } from '../../Constants'

const UserHomepage = (props) => {

    const username = props.match.params.username
    const userUrl = props.match.url

    

    return(
        <div className="user-homepage-wrapper">
            <h1>Welcome {username}!</h1>
            <div>
                <Link to={`${userUrl}/recipes`}>
                    Recipe Book!
                </Link>
            </div>
            <div>
                <Link to={`${userUrl}/recipes/new`}>
                    Add a Recipe!
                </Link>
            </div>
        </div>
    )

}

export default UserHomepage;