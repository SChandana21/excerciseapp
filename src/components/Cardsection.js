import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react'

const Cardsection = () => {
    const [excer, setexcer] = useState([]);
    const [filteredexcer, setfilteredexcer] = useState([]);
    const [filtertype, setfiltertype] = useState('');
    const excercises = async() => {
        try {
            const response = await fetch('http://localhost:4000/data');
            const jsondata = await response.json();
            console.log(jsondata.excercises);
            setexcer(jsondata.excercises);
            setfilteredexcer(jsondata.excercises); //To make sure initial set of filtered excercises is set to all before the button is triggered and the type is applied (Filter)
        } catch (error) {
            console.log('Unable to fetch the data');
        }
    }
       



    

    useEffect(() => {
        excercises();
    }, []);  //Mount all excercises on component load



    const filtereddata = (type) => {
        if (type === '') {
            setfilteredexcer(excer);
        } else {
            const filtereddata = excer.filter(item => item.type === type);
            setfilteredexcer(filtereddata);
            console.log(filteredexcer);
        }
    }

    const handlefilterchange = (type) => {
        setfiltertype(type);
        filtereddata(type);
        console.log(type);
        
    }

    useEffect(() => {
        console.log(filteredexcer); // Log filtered exercises whenever filteredexcer changes
    }, [filteredexcer]);


   




  return (
    <div className='maincontainer'>
        <h1>Excercises</h1>
        <div className='buttongroup'>
        <button onClick={() => handlefilterchange('bodyweight')} className='button2'>Bodyweight</button>
        <button onClick={() => handlefilterchange('strength')} className='button2'>Strength</button>
        <button onClick={() => handlefilterchange('cardio')} className='button2'>Cardio</button>
        </div> 
        <div className='productcontainer'>
        {filteredexcer.length > 0 ?
         (filteredexcer.slice(0,5).map((item, index) => (
            <div key={index}>
            <img alt={item.name} src={item.image}/>
            <p>{item.name}</p>

            </div>
        ))):(
            <p>Product not available</p>
        )};
        </div>
        
        

    </div>
  )
}

export default Cardsection