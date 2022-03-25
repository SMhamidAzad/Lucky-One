import React from 'react';
import { BsCartPlus } from 'react-icons/bs';

const SingleCar = (props) => {
    console.log(props.car);
    return (
        <div className="col">
        <div className="card h-100">
            <img src={props.car.img} alt="" className="card-img-top" />
          {/* <img src="..." className="card-img-top" alt="..."> */}
          <div className="card-body">
            <h5 className="card-title">{props.car.name}</h5>
            <p className="card-text">Price: ${props.car.price}</p>
            <button className='btn btn-success'>Add to Card <BsCartPlus></BsCartPlus></button>
          </div>
        </div>
      </div>
    );
};

export default SingleCar;