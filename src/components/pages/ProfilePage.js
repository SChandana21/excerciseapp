import React, { useEffect, useState } from 'react';
import Headerr from '../Headerr';
import Popupwindow from './Popupwindow';
import { IoMdClose } from "react-icons/io";
import { data } from 'react-router-dom';




const ProfilePage = () => {

  const [datares, setdatares] = useState([]);
  const [filtereddata, setfiltereddata] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const varw = async () => {
    try {
      const res = await fetch('http://localhost:5000/data');
      const resjson = await res.json();
      console.log(resjson.fooditems);
      setdatares(resjson);
      setfiltereddata(resjson.fooditems);
    } catch (error) {
      console.log('error reading the data');
    }

    

  }

  

  useEffect(() => {
    varw();
    
    
  }, []);

  

  const searchval = () => {
    const searched = document.getElementById('searchvall').value;
    if (searched) {
      const filterdata = filtereddata.filter(item =>  item.name === searched);
      console.log(filterdata);
      setfiltereddata(filterdata);
    } else {
      console.log('no value')
    }
    
    
    
  }
    
  

  
    
  


  


  
  



  const [openpopup, setopenpopup] = useState(false);

  return (

    <div className='grid-container'>
      <div className='griditem item-1'>
        <div className='headersec'>
          <p>
            Log Food
          </p>
        </div>
        <div className='searchdiv'>
          <input type='search'className='searchbar' id='searchvall' placeholder='Search for Food' />
          <button className='searchbutton' onClick={searchval}>
            <img src='https://static-00.iconduck.com/assets.00/magnifying-glass-icon-1022x1024-r7tyhsec.png' className='searchicoon' />
          </button>
        </div>
        {filtereddata.length > 0 ? (
          filtereddata.map((item, index) => (
            <div key={index} className="itemcontainer">
            <div className="items">
              <p>{item.name}</p>
              <p>300Cal</p>
            </div>
            <div className="itemdesc">
              <h6>P: 20g</h6>
              <h6>F: 15g</h6>
              <h6>C: 200g</h6>
              <button onClick={() => { setopenpopup(true) }}>+</button>
            </div>
          </div>
          ))
          
        ): <p></p>}
       
        {
          openpopup && (
            <div className='popup'>
              <div className='closeicon'>
                <IoMdClose onClick={() => { setopenpopup(!openpopup) }} />
              </div>
              <div className='popupwindow'>
                <p>Serving size:</p>
                <input type='number' />
              </div>
              <button>Add</button>
            </div>
          )
        }





      </div>
      <div className='griditem item-2'>Item 2</div>
    </div>

  )
}

export default ProfilePage