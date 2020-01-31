import React, { useState } from 'react'
import { ROOT_URL } from '../../Constants'
import './styling/Homepage.css'
import { Container, Row, Form, Button } from 'react-bootstrap'

const SignUp = (props) => {

    const [success, setSuccess] = useState()
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault() 
        const response = await fetch(`${ROOT_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: user.username,
                email: user.email,
                password: user.password
            })
        })
        const data = await response.json()
        setSuccess(data.success)
    }

    const checkSignUpSuccess = (success) => {
        if (success === true){
            props.props.history.push(`/users/${user.username}`)
        } else if( success === false ) {
            return(
                <div>
                    <h1>User Not Created</h1>
                </div>
            )
        }
    }

    return(
        <Container>
            <h3>Sign Up</h3>
            <Row>
                <Form onSubmit={e => handleSubmit(e)}>
                    <Form.Group as={Row}>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" onChange={e => setUser({ ...user, username: e.target.value })} />
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" onChange={e => setUser({ ...user, email: e.target.value })} />
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={e => setUser({ ...user, password: e.target.value })} />
                    </Form.Group>
                    <Button type="submit">Sign Up</Button>
                </Form>
                {console.log(user)}
                {checkSignUpSuccess(success)}
            </Row>
        </Container>
    )
}

export default SignUp;