import React from 'react';
import './CardInfo.css'

const CardInfo = (props) => {
    console.log(props.cart);
    return (
        <div className='mb-4'>
        <div className='card-info m-2 p-2 rounded-3'>
            <img className='w-25 rounded-3' src={props.cart.img} alt="" />
            <p>{props.cart.name}</p>
        </div>
        </div>
    );
};

export default CardInfo;