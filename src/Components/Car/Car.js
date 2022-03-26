import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import DisplayCar from '../DisplayCar/DisplayCar';
import './Car.css'

const Car = () => {
    const [cars,setCars]=useState([]);
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCars(data))
    },[])
    const handleAddToCart=(car)=>{
        const finds = cart.find(item => item.id === car.id)
        if(!finds && !(cart.length===4)){
            const newCart = [...cart,car];
            setCart(newCart)
        }
    }
    const chooseRandomOne=()=>{
        if(cart.length>0){
            const random1 =Math.floor(Math.random() * cart.length);
        // console.log(cart[random1]);
        setCart([cart[random1]]);
    }
        }
    const chooseAgain=()=>{
        setCart([])
        // console.log('clicked');
    }
   
    return (
        <div>
        <div className='row'>
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
              <div className='row my-5 container'>
                     <h3 className='mb-4'>People Want to Know: </h3>
                    <div className="col-md-4 quesAns">
                        <h3>How React Works?</h3>
                         <p>React has Virtual Dom. Which </p>
                    </div>
                    <div className="col-md-4 quesAns">
                        <h3>Difference Betweeen Props And State (props vs state)</h3>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius repudiandae laborum doloremque modi, a, accusamus provident perspiciatis quidem ad sed temporibus placeat molestias sunt dolorum, perferendis cum sint ipsum itaque.
                    </div>
                    <div className="col-md-4 quesAns">
                        <h3>How UseState Works?</h3>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores illo quos minus nulla nesciunt rerum eligendi ea eaque, non ipsa eos velit tempora fugiat voluptatum laborum officiis ipsam exercitationem iusto!
                     </div>
              </div>
            </div>
            <div className='col-md-3 order-1 order-md-2 choose-car'>
               <Card key={cart.id} cart={cart}></Card>
               
                   <button onClick={()=>chooseRandomOne()} className='btn btn-success me-1'>Choose 1 for me</button>

                   <button onClick={()=>chooseAgain()} className='btn btn-success ms-1'>Choose Again</button>
            </div>
        </div>
        </div>
    );
};

export default Car;