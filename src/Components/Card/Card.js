import React from 'react';

const Card = (props) => {
    console.log(props.cart);
    return (
        <div>
            <h3>Order Summary</h3>
            {
                props.cart.map(item => <h4>{item.name}</h4>)
            }
        </div>
    );
};

export default Card;