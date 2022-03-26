import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import DisplayCar from '../DisplayCar/DisplayCar';

const Car = () => {
    const [cars,setCars]=useState([]);
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCars(data))
    },[])
    const handleAddToCart=(car)=>{
        const newCart = [...cart,car];
        setCart(newCart)
    }
    const chooseRandomOne=()=>{
        const random1 =Math.floor(Math.random() * cart.length);
        // console.log(cart[random1]);
        setCart([cart[random1]]);
    }
    const chooseAgain=()=>{
        setCart([])
        // console.log('clicked');
    }
    return (
        <div className='row'>
            <div className='col-md-9'>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                 cars.map(item => <DisplayCar
                    key={item.id}
                    handleAddToCart={handleAddToCart} 
                    car={item}
                    ></DisplayCar>) 
                }
                </div>
            </div>
            <div className='col-md-3'>
               <Card key={cart.id} cart={cart}></Card>
               
               <button onClick={()=>chooseRandomOne()} className='btn btn-success me-1'>Choose 1 for me</button>

               <button onClick={()=>chooseAgain()} className='btn btn-success ms-1'>Choose Again</button>
            </div>
        </div>
    );
};

export default Car;