import React from 'react';
import { Form, Button, Container, ButtonGroup } from 'react-bootstrap';
import { collection, addDoc, getFirestore } from "firebase/firestore"
import { useState, useContext } from "react"
import { CartContext } from '../context/CartContext';




const CheckoutForm = ({ handleGoBack, total }) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [orderId, setOrderId] = useState(null)
    const [confirmation, setConfirmation] = useState(false)

    const { cart } = useContext(CartContext)

    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()
        addDoc(ordersCollection, order).then(({ id }) =>
            setOrderId(id))
            setConfirmation(true)
    }


    const order = {
        buyer: {
            name, email, phone
        },

        items: cart.map(({ id, name, price, quantity }) => ({
            id,
            name,
            price,
            quantity
        })),

        total: {
            total
        }
    }

    const ordersCollection = collection(db, "order")


    return (
        <div>
            {confirmation ? (
                <Container className="margin">
                    <h2>Yay!</h2>
                    <p className="lead">
                        Your order has been confirmed. We will be reaching out to you shortly to provide further information about payment and shipping.
                    </p>
                    <p>
                    <strong>Order number:</strong> {orderId}

                    </p>
                </Container>
            ):(
        
            <Container>
                <h2 className="margin mb-3">Checkout Form</h2>
                <Form onSubmit={handleSubmit} >

                    <Form.Group className="mb-3" controlId="nameField">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your full name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="emailField">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="phoneField">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="tel" placeholder="Enter your phone number"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </Form.Group>

                    <ButtonGroup >
                        <Button className="m-2" variant="secondary" onClick={handleGoBack}>Go Back</Button>
                        <Button type="submit" variant="primary" className="m-2" >Place Order</Button>
                    </ButtonGroup>
                </Form>

            </Container>
            )}
        </div>
    );
};

export default CheckoutForm;


