import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from './firebase.config';
import { useStatevalue } from '../context/stateprovider';
import { actiontype } from '../context/reducer';
import avatar from './avatar.png';

const Headerr = () => {

    const firebaseauth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{user}, dispatch] = useStatevalue()

    const login = async() => {
      const {user:{refreshToken, providerData}} = await signInWithPopup(firebaseauth, provider);
      dispatch({
        type: actiontype.SET_USER,
        user: providerData[0]
      })
      localStorage.setItem('user', JSON.stringify(providerData[0]));

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
      <img src={user ? user.photoURL :avatar} alt='text' className='logo2' onClick={login}/>
      </div>

      
    </div>
  )
}

export default Headerr

