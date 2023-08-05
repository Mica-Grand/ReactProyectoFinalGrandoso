import { useState } from 'react';
import { Button } from 'react-bootstrap';


const ItemCount = ({stock}) => {
    const [count, setCount] = useState(0);
    const [stockLimitReached, setStockLimitReached] = useState(false);


    const handleDecrement = () => {
        if (count > 0) {
            setCount((prevCount) => prevCount - 1);
            setStockLimitReached(false);
        }
    };

    const handleIncrement = () => {
        if (count < stock) {
            setCount((prevCount) => prevCount + 1);
            setStockLimitReached(false);
        } else {
            setStockLimitReached(true);
        }
    };

    return (
        <div>
            <div className="counter">
                <Button variant="outline-primary" className="count-button" onClick={handleDecrement}>-</Button>
                <p className="count">{count}</p>
                <Button variant="outline-primary" className="count-button" onClick={handleIncrement}>+</Button>
            </div>
            {stockLimitReached && <p style={{ color: 'red' }}>Stock limit reached!</p>}
            <Button className="custom-btn custom-btn-cart">Add to cart</Button>
        </div>
    );
};

export default ItemCount