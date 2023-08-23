import React from 'react';
import { Form, Button, Container } from 'react-bootstrap'
import { collection, addDoc, getFirestore } from "firebase/firestore"
import { useState } from "react"

const ContactForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [confirmation, setConfirmation] = useState(false)

    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()
        addDoc(messagesCollection, messages)
        setConfirmation(true)

    }

    const messages = {
        name,
        email,
        message
    }

    const messagesCollection = collection(db, "message")


    return (
        <div>
            {confirmation ? (
                <div className="margin-bottom">
                    <h2 className="m-5">Message received!</h2>
                    <p className="lead margin-bottom pb-5">
                        {name}, thank you for reaching out! We've received your message and will be in touch soon.
                    </p>
                </div>
            ) : (
                <Container>
                    <p className="lead">We want to hear from you, gorgeous.
                        Please flick us a message using the form below.</p>
                    <Form className="m-5" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" required
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required
                                onChange={(e) => setEmail(e.target.value)}

                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Write your message here</Form.Label>
                            <Form.Control as="textarea" rows={3} required
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit"
                        >
                            Submit
                        </Button>
                    </Form>
                </Container>
            )}
        </div>
    )
}

export default ContactForm