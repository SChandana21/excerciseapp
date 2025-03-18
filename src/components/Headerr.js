import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from './firebase.config';
import { useStatevalue } from '../context/stateprovider';
import { actiontype } from '../context/reducer';
import avatar from './avatar.png';
import { PiSignOutThin } from "react-icons/pi";
import { AiOutlineProfile } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { TfiMoney } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import Homecontainer from './Homecontainer';








const Headerr = () => {

const [menu, setmenu] = useState(false);

    const firebaseauth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{user}, dispatch] = useStatevalue()



    const login = async() => {
      if (!user) {
        const {user:{refreshToken, providerData}} = await signInWithPopup(firebaseauth, provider);
      dispatch({
        type: actiontype.SET_USER,
        user: providerData[0]
      })
      localStorage.setItem('user', JSON.stringify(providerData[0]));

    } else {
      setmenu(!menu);
    }
      }


  

  return (
    <div className='header'>
      <img src='https://marketplace.canva.com/EAFMWRbCRm0/1/0/1600w/canva-red-black-minimalist-fitness-logo-dcYVFBq4DTg.jpg' alt='Text' className='logo'/>
      <ul>
        <li>Home</li>
        <li>Excercises</li>
        <li>About</li>
        <li>Our Program</li>
      </ul>
      <div className='icons'>
      <img  src={user ? user.photoURL :avatar} alt='text' className='logo2' onClick={login}/>
      {menu && (
        <div className='dropdown'>
      <Link to="/Profile"><p>Your profile</p></Link>
      <p>Calorie Tracker </p>
      <p>Excercise Tracker</p>
      <p>Subscriptions</p>
      <p>Log out 
      <PiSignOutThin/>
      </p>
      </div>)}
      </div>
      
    </div>
  )
}

export default Headerr

