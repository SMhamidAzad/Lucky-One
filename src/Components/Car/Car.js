import React, { useEffect, useState } from 'react';

const Car = () => {
    const [car,setCar]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Car;