import React from 'react';
import './CardInfo.css'

const CardInfo = ({cart}) => {
    const {name,img}=cart
    return (
        <div className='mb-4'>
        <div className='card-info m-2 p-2 rounded-3'>
            <img className='w-25 rounded-3' src={img} alt="" />
            <p>{name}</p>
        </div>
        </div>
    );
};

export default CardInfo;