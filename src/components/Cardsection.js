import React, { useEffect, useState } from 'react'

const Cardsection = () => {
    const [excer, setexcer] = useState([]);
    const excercises = async() => {
        try {
            const response = await fetch('http://localhost:4000/data');
            const jsondata = await response.json();
            console.log(jsondata.excercises);
            setexcer(jsondata.excercises);
        } catch (error) {
            console.log('Unable to fetch the data');
        }
    }

    

    useEffect(() => {
        excercises();
    }, []);
  return (
    <div>
        <p>Excercises</p>
        <ul>
            <li></li>
            <li></li>
            <li></li>   
        </ul>
        <img/>
        <p></p>
    </div>
  )
}

export default Cardsection