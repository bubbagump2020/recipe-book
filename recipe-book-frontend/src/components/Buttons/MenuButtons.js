import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from '@material-ui/core'
import { Redirect } from 'react-router-dom'



export const UserHomeButton = () => {
    const { user } = useSelector(state => ({ user: state.authentication.loggedInUser.token.username }))
    return(
        <React.Fragment>
            <Button color="inherit" href={`/users/${user}`}>
                User Home
            </Button>
        </React.Fragment>
    )
}

export const RecipeIndexButton = () => {

    const { user } = useSelector(state => ({ user: state.authentication.loggedInUser.token.username }))

    return(
        <React.Fragment>
            <Button color="inherit" href={`/users/${user}/recipes`}>
                Recipes
            </Button>
        </React.Fragment>
    )
}

export const CreateRecipeButton = () => {

    const { user } = useSelector(state => ({ user: state.authentication.loggedInUser.token.username }))

    return(
        <React.Fragment>
            <Button color="inherit" href={`/users/${user}/recipes/new`}>
                Create Recipe
            </Button>
        </React.Fragment>
    )

}

export const SignOutButton = () => {
    const [ navigate, setNavigate ] = React.useState(false)

    const logOutClick = () => {
        sessionStorage.clear('userToken')
        setNavigate(true)
    }

    const checkLogOutState = () => {
        if (navigate){
            return <Redirect to="/" push={true} />
        }
    }

    return(
        <Button color="inherit" onClick={logOutClick}>
            Sign Out
            {checkLogOutState()}
        </Button>
    )
}