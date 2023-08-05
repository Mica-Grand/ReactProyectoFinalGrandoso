import React from 'react';
import { Container, Card } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { useParams } from 'react-router-dom';

const ItemDetail = ({ products }) => {
    const { id } = useParams();

    const filteredProducts = products.filter ((product) => product.id == id)

    return (
        <div>
            {filteredProducts.map((p) => {
                return (
                    <div key={p.id}>
                        <Container className="margin">
                            <Card style={{ width: '25rem' }}>
                                <Card.Img variant="top" src={p.picture} alt={p.name} />
                                <Card.Body>
                                    <Card.Title>{p.name}</Card.Title>
                                    <Card.Text>{p.description}</Card.Text>
                                    <Card.Text>Precio: ${p.price}</Card.Text>
                                    <ItemCount stock={p.stock} />
                                </Card.Body>
                            </Card>
                        </Container>
                    </div>
                )
            })}

        </div>

    )
}

export default ItemDetail