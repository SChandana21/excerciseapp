import React from 'react';
import Headerr from '../Headerr';

const ProfilePage = () => {

    

  return (
    
    <div className='grid-container'>
      <div className='griditem item-1'>
        <div className='headersec'>
          <p>
          Log Food
          </p>
          </div>
        <div className='searchdiv'>
          <input type='search' className='searchbar' placeholder='Search for Food'/>
          <button className='searchbutton'>
            <img src='https://static-00.iconduck.com/assets.00/magnifying-glass-icon-1022x1024-r7tyhsec.png' className='searchicoon'/>
          </button>
        </div>
        <div className='itemcontainer'>
            <div className='items'>
              <p>Oatmeal</p>
              <p>300</p>
            </div>
            <div className='itemdesc'>
              <h6>P:{"20g"}</h6>
              <h6>F:{"15g"}</h6>
              <h6>C:{"200g"}</h6>
              <button>+</button>
              </div>
          </div>
          <div className='itemcontainer'>
            <div className='items'>
              <p>Oatmeal</p>
              <p>300</p>
            </div>
            <div className='itemdesc'>
              <h6>P:{"20g"}</h6>
              <h6>F:{"15g"}</h6>
              <h6>C:{"200g"}</h6>
              <button>+</button>
              </div>
          </div>
          <div className='itemcontainer'>
            <div className='items'>
              <p>Oatmeal</p>
              <p>300</p>
            </div>
            <div className='itemdesc'>
              <h6>P:{"20g"}</h6>
              <h6>F:{"15g"}</h6>
              <h6>C:{"200g"}</h6>
              <button>+</button>
              </div>
          </div>
          

      </div>
      <div className='griditem item-2'>Item 2</div>
    </div>

  )
}

export default ProfilePage