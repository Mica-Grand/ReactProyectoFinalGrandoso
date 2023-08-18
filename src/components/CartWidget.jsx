import React, { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import { CartFill } from 'react-bootstrap-icons';
import { CartContext } from '../context/CartContext'; 

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);

    return (
        <div>
            <Container className="d-flex align-items-center">
                <CartFill size={24} className="text-white text-decoration-none" />
                <Badge bg="danger" className="ms-2" pill>
                    {totalQuantity}
                </Badge>
            </Container>
        </div>
    );
};

export default CartWidget;
