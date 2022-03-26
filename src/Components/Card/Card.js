import React from 'react';
import CardInfo from '../CardInfo/CardInfo';

const Card = (props) => {
    console.log(props.cart);
    return (
        <div className='container'>
            <h3 className='text-white my-3'>Your Favorite Car</h3>
            {
                 props.cart.map(item => <CardInfo key={item.id} cart={item}></CardInfo>)    
            }
        </div>
    );
};

export default Card;