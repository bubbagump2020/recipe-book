import React from 'react'
import './styling/Homepage.css'
import SignUp from './SignUp'
import SignIn from './SignIn'
import { Container, Row, Col } from 'react-bootstrap'

const Homepage = (props) => {
    
    return(
        <Container fluid>
            <Row>
                <Col className="sigin">
                    <SignIn props={props} />
                </Col>
                <Col className="signup">
                    <SignUp props={props} />
                </Col>
            </Row>
        </Container>
    )
}

export default Homepage;