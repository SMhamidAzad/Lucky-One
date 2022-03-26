import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import DisplayCar from '../DisplayCar/DisplayCar';
import QuesAndAns from '../QuesAndAns/QuesAndAns';
import './CarShop.css'

const Car = () => {
    const [cars,setCars]=useState([]);
    const [cart,setCart]=useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCars(data))
    },[])
    // add to cart button 
    const handleAddToCart=(car)=>{
        const finds = cart.find(item => item.id === car.id)
        if(!finds && !(cart.length===4)){
            const newCart = [...cart,car];
            setCart(newCart)
        }
    }
    // choose one button 
    const chooseRandomOne=()=>{
        if(cart.length>0){
            const random1 =Math.floor(Math.random() * cart.length);
            setCart([cart[random1]]);
        }
    }
    // choose again button 
    const chooseAgain=()=>{
        setCart([])
    }
   
    return (
        <div>
            <div className='row m-0'>
                <div className='col-md-9 order-2 order-md-1'>
                    <div className='container row row-cols-1 row-cols-md-3 g-4'>
                        {
                        cars.map(item => <DisplayCar
                            key={item.id}
                            handleAddToCart={handleAddToCart} 
                            car={item}
                            ></DisplayCar>) 
                        }
                    </div>
                    <QuesAndAns></QuesAndAns>
                </div>
                <div className='col-md-3 order-1 order-md-2 choose-car'>
                    <div>
                        <Card key={cart.id} cart={cart}></Card>
                
                        <button onClick={()=>chooseRandomOne()} className='btn  me-1'>Choose 1 for me</button>

                        <button onClick={()=>chooseAgain()} className='btn ms-1'>Choose Again</button>
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default Car;