import React from 'react';

const CardInfo = (props) => {
    console.log(props);
    return (
        <div>
            <img className='w-25' src={props.cart.img} alt="" />
            <p>{props.cart.name}</p>
        </div>
    );
};

export default CardInfo;