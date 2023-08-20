import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Item from './Item';

const ItemList = ({ products, title }) => {
    return (
        <Container className="margin">
            <h1 className="text-uppercase">{title}</h1>
            <Row xs={1} sm={2} md={3} className="g-4">
                {products.map((product) => (
                    <Item
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        picture={product.picture}
                        description={product.description}
                        price={product.price}
                    />
                ))}
            </Row>
        </Container>
    );
};

export default ItemList;
