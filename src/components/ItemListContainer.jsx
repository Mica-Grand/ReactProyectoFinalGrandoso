import React from 'react';
import ItemList from './ItemList';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'



const ItemListContainer = () => {
    
    const [products, setProducts] = useState([])

    const {category} = useParams()

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "Productos");
    
        getDocs(itemsCollection)
            .then((snapshot) => {
                const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setProducts(docs);
            });
    }, []);
    

    const filteredProducts = category && category !== "all" ? products.filter((product) => product.category === category) : products;

    return (
        <Container className="d-flex">
            <ItemList products={filteredProducts}
            />
        </Container>
    )
}

export default ItemListContainer