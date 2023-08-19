import React from 'react';
import { Form, Button } from 'react-bootstrap';

const CheckoutForm = ({ handleGoBack }) => {
    return (
        <div>
            <h2 className="margin">Checkout Form</h2>
            <Form> 
                <Button onClick={handleGoBack}>Go Back</Button>
                <Button type="submit">Place Order</Button>
            </Form>
        </div>
    );
};

export default CheckoutForm;


