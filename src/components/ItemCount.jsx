import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import {CartContext} from '../context/CartContext'


const ItemCount = ({quantity, setShowCompletePurchase, handleDecrement, handleIncrement, p }) => {
    

    const {cart, setCart} = useContext(CartContext)

    const handleAdd = (quantity) => {
        const itemAdded = { ...p, quantity };
        const newCart = [...cart];
        const inCart = newCart.find((product) => product.id === itemAdded.id);
    
        if (inCart) {
            inCart.quantity += quantity;
        } else {
            newCart.push(itemAdded);
        }
        setCart(newCart);

        setShowCompletePurchase(true);
    };
    

    return (
        <div>
            <div className="counter">
                <Button variant="outline-primary" className="count-button" onClick={handleDecrement}>-</Button>
                <p className="count">{quantity}</p>
                <Button variant="outline-primary" className="count-button" onClick={handleIncrement}>+</Button>
            </div>
            <Button className="custom-btn custom-btn-cart" onClick={() => handleAdd(quantity)}>Add to cart</Button>
        </div>
    );
};

export default ItemCount