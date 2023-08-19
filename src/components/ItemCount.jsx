import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import {CartContext} from '../context/CartContext'


const ItemCount = ({quantity, setShowCompletePurchase, handleDecrement, handleIncrement, product, id}) => {
    

    const {cart, setCart} = useContext(CartContext)

    const handleAdd = (quantity) => {
        const itemAdded = { ...product, quantity };
        const existingCartItem = cart.find((cartItem) => cartItem.id === itemAdded.id);
    
        if (existingCartItem) {
            existingCartItem.quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, itemAdded]);
        }

        setShowCompletePurchase(true);
        console.log(cart)
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