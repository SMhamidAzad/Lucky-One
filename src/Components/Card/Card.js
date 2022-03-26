import React from 'react';
import CardInfo from '../CardInfo/CardInfo';

const Card = ({cart}) => {
    return (
        <div className='container'>
            <h3 className='text-white my-3'>Your Favorite Car</h3>
            {
                 cart.map(item => <CardInfo key={item.id} cart={item}></CardInfo>)    
            }
        </div>
    );
};

export default Card;