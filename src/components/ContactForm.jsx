import React from 'react';
import { Form, Button } from 'react-bootstrap'
import { collection, addDoc, getFirestore } from "firebase/firestore"
import { useState } from "react"

const ContactForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const db = getFirestore()

    const handleSubmit=(e) => {
        e.preventDefault()
        addDoc(messagesCollection, messages)
    }

    const messages = { 
        name,
        email,
        message
    }

    const messagesCollection = collection(db, "message")


    return (
        <div>
            <Form className="m-5"  onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}

                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Write your message here</Form.Label>
                    <Form.Control as="textarea" rows={3}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit"
                >
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default ContactForm