import React, { useState, useEffect } from 'react'
import {
    Link
} from 'react-router-dom'
import { ROOT_URL } from '../../Constants'

const UserHomepage = (props) => {

    const username = props.match.params.username

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        const myFetch = async () => {
            const result = await fetch(`${ROOT_URL}/users/${document.cookie}/recipes`)
            const data = await result.json()
            setRecipes(data)
        }

        myFetch()

    }, [])

    return(
        <div className="user-homepage-wrapper">
            <h1>Welcome {username}!</h1>
            <div>
                <Link to={`/users/${username}/recipes`}>
                    Recipe Book!
                </Link>
            </div>
            <div>
                <Link to={`/users/${username}/recipes/new`}>
                    Add a Recipe!
                </Link>
            </div>
        </div>
    )

}

export default UserHomepage;