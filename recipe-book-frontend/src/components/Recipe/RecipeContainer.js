import React, {useState, useEffect } from 'react'
// import { ROOT_URL } from '../../Constants'
import { Link } from 'react-router-dom'

const RecipeContainer = (props) => {

    const user = props.match.params.username
    const url = props.match.url

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        const myFetch = async () => {
            const result = await fetch(`${url}/recipes`)
            const data = await result.json()
            setRecipes(data)
        }

        myFetch()

    }, [])

    return(
        <div>
            <h1>Recipe Container</h1>
            <div></div>
            <Link to={`/users/${user}`}>Back to Home Page</Link>
        </div>
    )
}

export default RecipeContainer