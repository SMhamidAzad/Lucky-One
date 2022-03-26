import React from 'react';
import { BsCartPlus } from 'react-icons/bs';
import './DisplayCar.css'

const SingleCar = (props) => {
    return (
        <div className="col">
        <div className="card h-100 display-car">
            <img src={props.car.img} alt="" className="" />
          <div className="card-body">
            <h5 className="card-title">{props.car.name}</h5>
            <p className="card-text">Price: ${props.car.price}</p>
            <button onClick={()=>props.handleAddToCart(props.car)} className='btn btn-outline-success'>Add to Card <BsCartPlus></BsCartPlus></button>
          </div>
        </div>
      </div>
    );
};

export default SingleCar;