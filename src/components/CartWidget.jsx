import React from 'react'
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import { CartFill } from 'react-bootstrap-icons';



const CartWidget = () => {
    return (
        <div>
            <Container className="d-flex align-items-center">
                <CartFill size={24} className="text-white text-decoration-none"/>
                <Badge bg="danger" className="ms-2" pill>
                    9
                </Badge>
            </Container>
        </div>
    )
}

export default CartWidget