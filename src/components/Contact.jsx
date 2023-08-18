import React from 'react'
import MyForm from './MyForm'
import { Container } from 'react-bootstrap'

const Contact = () => {
    return (
        <div>
            <Container className="margin">
                <h1>Contact Us</h1>
                <p>Please reach out to us using the form below.</p>
                <MyForm />
            </Container>
        </div>
    )
}

export default Contact