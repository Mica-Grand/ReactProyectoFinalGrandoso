import React from 'react'
import ContactForm from './ContactForm'
import { Container } from 'react-bootstrap'

const Contact = () => {
    return (
        <div>
            <Container className="margin">
                <h1>Contact Us</h1>
            </Container>
            <Container className="margin-bottom">
                <ContactForm />
            </Container>
        </div>
    )
}

export default Contact