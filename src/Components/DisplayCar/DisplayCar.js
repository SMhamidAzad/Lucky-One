import React from 'react';
import { BsCartPlus } from 'react-icons/bs';
import './DisplayCar.css'

const SingleCar = ({car,handleAddToCart}) => {
  const {name,img,price}=car
    return (
        <div className="col">
        <div className="card h-100 display-car">
            <img src={img} alt="" className="" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Price: ${price}</p>
            <button onClick={()=>handleAddToCart(car)} className='btn btn-outline-success'>Add to Card <BsCartPlus></BsCartPlus></button>
          </div>
        </div>
      </div>
    );
};

export default SingleCar;