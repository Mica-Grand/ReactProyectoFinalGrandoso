import React from 'react';
import Item from './Item'

const ItemList = ({products}) => {

    return (
        <>
            {products.map((p) => {
                return (
                    <Item
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        picture={p.picture}
                        description={p.description}
                        stock={p.stock}
                        price={p.price}
                    />
                )
            }
            )}  
        </>
    )
}

export default ItemList