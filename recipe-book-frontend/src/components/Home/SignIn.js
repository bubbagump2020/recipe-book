import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { username, password, user, userRecipes } from '../../redux/actions/AuthActions' 
import { ROOT_URL } from '../../Constants'
import './styling/Homepage.css'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const SignIn = (props) => {

    const dispatch = useDispatch()
    const { signup } = useSelector(state => ({ signup: state.signup}))
    const loginProps = props.props

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const asyncHandleSubmit = async (e) => {
            const resultUser = await fetch(`${ROOT_URL}/login`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'X-Requested-With': 'XmlHttpRequest',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: signup.username,
                    password: signup.password
                })
            })
            const loggedInUser = await resultUser.json()
            dispatch(user(loggedInUser))
            loginProps.history.push(`/users/${loggedInUser.username}`)
            console.log(loggedInUser)
            // const resultRecipes = await fetch(`${ROOT_URL}/users/${loggedInUser.id}/recipes`)
            // const fetchedRecipes = await resultRecipes.json()
            // dispatch(userRecipes(fetchedRecipes))
            

        }
        asyncHandleSubmit()
    }

    return(
        <Container fluid="true" >
            <h2>Sign In</h2>
            <Row>
                <Form onSubmit={e => handleSubmit(e)}>
                    <Form.Group as={Row}>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" onChange={e => dispatch(username(e.target.value))} placeholder="Username" />
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={e => dispatch(password(e.target.value))} placeholder="Password" />
                    </Form.Group>
                    <Button type="submit">Sign In</Button>
                </Form>
            </Row>
        </Container>
    )
}

export default SignIn;