import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const { id } = useParams(); 

    useEffect(() => {
        const db = getFirestore();

        const oneItem = doc(db, "Productos", id); 

        getDoc(oneItem)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const docs = snapshot.data();
                    setProduct({ ...docs, id }); 
                } else {
                    console.log("Product not found");
                }
            })
            .catch((error) => {
                console.error("Error fetching product:", error);
            });
    }, [id]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <ItemDetail product={product} />
        </>
    );
};

export default ItemDetailContainer;
