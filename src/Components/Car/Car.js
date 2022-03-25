import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import DisplayCar from '../DisplayCar/DisplayCar';

const Car = () => {
    const [cars,setCars]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCars(data))
    },[])
    return (
        <div className='row'>
            <div className='col-md-9'>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                 cars.map(item => <DisplayCar car={item}></DisplayCar>) 
                }
                </div>
            </div>
            <div className='col-md-3'>
                 <Card></Card>
            </div>
        </div>
    );
};

export default Car;