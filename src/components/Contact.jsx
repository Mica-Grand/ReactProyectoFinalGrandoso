import React from 'react'
import Form from './Form'
import { Container } from 'react-bootstrap'

const Contact = () => {
    return (
        <div>
            <Container className="margin">
                <h1>Contact Us</h1>
                <p>Please reach out to us using the form below.</p>
                <Form/>
            </Container>
        </div>
    )
}

export default Contact