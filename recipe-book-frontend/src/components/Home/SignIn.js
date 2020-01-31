import React, { useState } from 'react'
import { ROOT_URL } from '../../Constants'
import './styling/Homepage.css'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const SignIn = (props) => {

    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    const [success, setSuccess] = useState()
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
                    username: user.username,
                    password: user.password
                })
            })
            const loggedInUser = await resultUser.json()
            setSuccess(loggedInUser.success)
            document.cookie = loggedInUser.user.id
        }
        asyncHandleSubmit()
    }

    const checkSignInMessage = message => {
        if(message === true){
            loginProps.history.push(`/users/${user.username}`)
        } else if(message === false){
            return(
                <div>
                    <p>Username or Password was wrong, please try again</p>
                </div>
            )
        }
    }

    return(
        <Container fluid="true" >
            <h2>Sign In</h2>
            <Row>
                <Form onSubmit={e => handleSubmit(e)}>
                    <Form.Group as={Row}>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" onChange={e => setUser({ ...user, username: e.target.value })} placeholder="Username" />
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={e => setUser({ ...user, password: e.target.value })} placeholder="Password" />
                    </Form.Group>
                    <Button type="submit">Sign In</Button>
                </Form>
                {checkSignInMessage(success)}
            </Row>
        </Container>
    )
}

export default SignIn;