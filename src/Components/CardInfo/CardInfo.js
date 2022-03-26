import React from 'react';
import './CardInfo.css'

const CardInfo = (props) => {
    console.log(props.cart);
    return (
        <div>
        <div className='card-info'>
            <img className='w-25' src={props.cart.img} alt="" />
            <p>{props.cart.name}</p>
        </div>
        </div>
    );
};

export default CardInfo;