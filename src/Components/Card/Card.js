import React from 'react';
import CardInfo from '../CardInfo/CardInfo';

const Card = (props) => {
    console.log(props.cart);
    
    return (
        <div>
            <h3>Order Summary</h3>
            {
                 props.cart.map(item => <CardInfo key={item.id} cart={item}></CardInfo>)    
            }
        </div>
    );
};

export default Card;