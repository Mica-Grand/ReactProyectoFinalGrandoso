import React from 'react'
import ContactForm from './ContactForm'
import { Container } from 'react-bootstrap'

const Contact = () => {
    return (
        <div>
            <Container className="margin">
                <h1>Contact Us</h1>
                <p className="lead">We want to hear from you, gorgeous.
                Please flick us a message using the form below.</p>
            </Container>
            <Container>
                <ContactForm />
            </Container>
        </div>
    )
}

export default Contact