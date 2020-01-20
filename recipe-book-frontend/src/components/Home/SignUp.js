import React from 'react'
import { ROOT_URL } from '../../Constants'
import { useSelector, useDispatch } from 'react-redux'
import { username, email, password } from '../../redux/actions/AuthActions'
import './styling/Homepage.css'
import { Container, Row, Form, Button } from 'react-bootstrap'

const SignUp = () => {

    const dispatch = useDispatch()
    const  { signup }  = useSelector(state => ({ signup: state.signup }))

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${ROOT_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: signup.username,
                email: signup.email,
                password: signup.password
            })
        })
        .then(response => response.json())
    }

    return(
        <Container>
            <h3>Sign Up</h3>
            <Row>
                <Form onSubmit={e => handleSubmit(e)}>
                    <Form.Group as={Row}>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" onChange={e => dispatch(username(e.target.value))} />
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" onChange={e => dispatch(email(e.target.value))} />
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={e => dispatch(password(e.target.value))} />
                    </Form.Group>
                    <Button type="submit">Sign Up</Button>
                </Form>
            </Row>
        </Container>
    )
}

export default SignUp;